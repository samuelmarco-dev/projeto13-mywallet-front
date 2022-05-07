import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ContextoEntradaSaida from "../context/EntradaSaida.js";
import ContextoDadosUsuario from "../context/DadosUsuario.js";

import Paragrafo from "../utils/Paragrafo.js";
import Botao from "../utils/Botao.js";
import swal from "sweetalert";

import { ThreeDots } from 'react-loader-spinner';
import { Container } from "./style.js"

function TelaDados() {
    const arrayInputs = ['Valor', 'Descrição'];

    const navigate = useNavigate();
    const { emailUsuario, entradaSaida } = useContext(ContextoEntradaSaida);
    const { nomeUsuario, tokenUsuario } = useContext(ContextoDadosUsuario);

    const [novoDado, setNovoDado] = useState({
        description: '',  value: ''
    });
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);

    function limparDados(){
        setNovoDado({
            description: '',  value: ''
        });
    }

    function postDadosCapital(){
        setDisable(true);
        setLoading(true);

        let endpoint = null;
        
        if(entradaSaida === 'entrada' || localStorage.getItem('item') === 'entrada'){
            endpoint = 'http://localhost:5000/introduce-entry';
        }
        if(entradaSaida === 'saida' || localStorage.getItem('item') === 'saida'){
            endpoint = 'http://localhost:5000/introduce-exit';
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

        console.log(endpoint);
        console.log(objetoReceita);
        
        if(!endpoint){
            swal('Não foi possível realizar a operação, faça login novamente!');
            setTimeout(() => { navigate('/login'); }, 1000);
        }
        const promise = axios.post(endpoint, objetoReceita, config);
        promise.then((response)=>{
            setTimeout(() => {
                swal(`Status: ${response.status}! Dados cadastrados com sucesso`)
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
                <div className="inputs">
                    <input type="text" placeholder={arrayInputs[0]} value={novoDado.value} disabled={disable}
                    onChange={(e)=>setNovoDado({...novoDado, value: e.target.value})} />
                    <input type="text" placeholder={arrayInputs[1]} value={novoDado.description} disabled={disable}
                    onChange={(e)=>setNovoDado({...novoDado, description: e.target.value})} />
                </div>
                <div className="botao">
                    {
                        loading ? <Botao conteudo={<ThreeDots color="#fff" height={13} />} disabled={disable} />
                        : <Botao conteudo={(entradaSaida === 'entrada' || localStorage.getItem('info') === 'entrada') ? 
                        'Salvar entrada' : 'Salvar saída'} click={()=>postDadosCapital()} disabled={disable} />
                    }
                </div>
            </article>
        </Container>
    );
}

export default TelaDados;