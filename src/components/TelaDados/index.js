import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

import ContextoEntradaSaida from "../context/EntradaSaida.js";
import ContextoDadosUsuario from "../context/DadosUsuario.js";

import Paragrafo from "../utils/Paragrafo.js";
import Botao from "../utils/Botao.js";

import { Container } from "./style.js"

function TelaDados() {
    const arrayInputs = ['Valor', 'Descrição'];

    // const navigate = useNavigate();
    const { emailUsuario, entradaSaida } = useContext(ContextoEntradaSaida);
    const { nomeUsuario, tokenUsuario } = useContext(ContextoDadosUsuario);

    const [novoDado, setNovoDado] = useState({
        description: '',  value: ''
    });

    // function limparDados(){
    //     setNovoDado({
    //         description: '',  value: ''
    //     });
    // }

    function postDadosCapital(){
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
        const promise = axios.post(endpoint, objetoReceita, config);
        promise.then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
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
                    <input type="text" placeholder={arrayInputs[0]} value={novoDado.value}
                    onChange={(e)=>setNovoDado({...novoDado, value: e.target.value})} />
                    <input type="text" placeholder={arrayInputs[1]} value={novoDado.description}
                    onChange={(e)=>setNovoDado({...novoDado, description: e.target.value})} />
                </div>
                <div className="botao">
                    <Botao conteudo={entradaSaida === 'entrada' ? 'Salvar entrada' : 'Salvar saída'} 
                    click={()=>postDadosCapital()}/>
                </div>
            </article>
        </Container>
    );
}

export default TelaDados;