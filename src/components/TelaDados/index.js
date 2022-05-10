import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

import ContextoEntradaSaida from "../context/EntradaSaida.js";
import ContextoDadosUsuario from "../context/DadosUsuario.js";

import Paragrafo from "../utils/Paragrafo.js";
import Botao from "../utils/Botao.js";
import swal from "sweetalert";

import { ThreeDots } from 'react-loader-spinner';
import { Container } from "./style.js";
dotenv.config();

function TelaDados() {
    const arrayInputs = ['Valor', 'Descrição'];

    const navigate = useNavigate();
    const { emailUsuario, entradaSaida, setEntradaSaida, setEmailUsuario } = useContext(ContextoEntradaSaida);
    const { nomeUsuario, tokenUsuario, setNomeUsuario, setTokenUsuario } = useContext(ContextoDadosUsuario);

    const [novoDado, setNovoDado] = useState({
        description: '',  value: ''
    });
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(entradaSaida === null || localStorage.getItem('info') === null || (tokenUsuario === null && localStorage.getItem('token') === null)){ 
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('info');
            setEntradaSaida(null);
            setEmailUsuario(null);
            setNomeUsuario(null);
            setTokenUsuario(null);
            setTimeout(() => {
                swal('Sessão expirada, faça login novamente.');
                navigate('/login');
            } , 500);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function limparDados(){
        setNovoDado({
            description: '',  value: ''
        });
    }

    function retornarParaTelaInicial(){
        navigate('/carteira'); 
        setEntradaSaida(null);
        localStorage.removeItem('info');
    }

    function postDadosCapital(event){
        event.preventDefault();
        setDisable(true);
        setLoading(true);

        if(novoDado.value.includes(',')){
            novoDado.value = novoDado.value.replace(',', '.');
        }

        let endpoint = null;
        
        if(entradaSaida === 'entrada' || localStorage.getItem('item') === 'entrada'){
            endpoint = `${process.env.REACT_APP_API}/introduce-entry`;
        }
        if(entradaSaida === 'saida' || localStorage.getItem('item') === 'saida'){
            endpoint = `${process.env.REACT_APP_API}/introduce-exit`;
        }

        const objetoReceita = {
            name: nomeUsuario ? nomeUsuario : localStorage.getItem('name'), 
            type: entradaSaida ? entradaSaida : localStorage.getItem('info'),
            description: novoDado.description, 
            value: novoDado.value, 
            email: emailUsuario ? emailUsuario : localStorage.getItem('email'),
        };
        const config = {
            headers: {
                Authorization: `Bearer ${tokenUsuario ? tokenUsuario : localStorage.getItem('token')}`
            }
        };

        if(!endpoint || entradaSaida === null || localStorage.getItem('info') === null || tokenUsuario === null || localStorage.getItem('token') === null){
            swal('Não foi possível realizar a operação, faça login novamente!');
            setTimeout(() => { 
                navigate('/login'); 
            }, 2500);
        }
        const promise = axios.post(endpoint, objetoReceita, config);
        promise.then((response)=>{
            setTimeout(() => {
                swal(`Status: ${response.status}! Dados cadastrados com sucesso`);
                setEntradaSaida(null);
                localStorage.removeItem('info');
                navigate('/carteira');
            }, 1200);
        }).catch((err)=>{
            setTimeout(() => {
                setDisable(false);
                setLoading(false);

                if(typeof(err.response.data) === 'string'){
                    swal(`Status: ${err.response.status}! Erro ao postar dados de 
                    ${entradaSaida ? entradaSaida : localStorage.getItem('info')}!`, err.response.data);
                    limparDados();
                }
                if(typeof(err.response.data) === 'object'){
                    (err.response.data).forEach(element => {
                        alert(element);
                    });
                    limparDados();
                }
                if(typeof(err.response.data) !== 'object' && typeof(err.response.data) !== 'string'){
                    swal(`Status: ${err.response.status}! Erro ao fazer postar dados de 
                    ${entradaSaida ? entradaSaida : localStorage.getItem('info')}!`);
                    limparDados();
                }
            }, 1000);
        });
    }   

    return (  
        <Container>
            <header>
                <Paragrafo conteudo={(entradaSaida === 'entrada' && localStorage.getItem('info') === 'entrada') ? 
                'Nova entrada' : 'Nova saída'} />
            </header>
            <article>
                <form onSubmit={postDadosCapital}>
                    <div className="inputs">
                        <input type="number" placeholder={arrayInputs[0]} value={novoDado.value} disabled={disable}
                        pattern={/^[0-9]{0,}[.|,]{0,1}[0-9]{0,6}$/} min="1" required step="any"
                        onChange={(e)=>setNovoDado({...novoDado, value: e.target.value})} />
                        <input type="text" placeholder={arrayInputs[1]} value={novoDado.description} disabled={disable}
                        required onChange={(e)=>setNovoDado({...novoDado, description: e.target.value})} />
                    </div>
                    <div className="botao">
                        {
                            loading ? <Botao conteudo={<ThreeDots color="#fff" height={13} />} disabled={disable} />
                            : <Botao conteudo={(entradaSaida === 'entrada' || localStorage.getItem('info') === 'entrada') ? 
                            'Salvar entrada' : 'Salvar saída'} disabled={disable} tipo="submit" />
                        }
                    </div>
                </form>
                <Paragrafo conteudo={'Voltar para a carteira'} click={()=> retornarParaTelaInicial()} />
            </article>
        </Container>
    );
}

export default TelaDados;