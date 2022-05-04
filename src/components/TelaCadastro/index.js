import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Botao from "../utils/Botao.js";
import Paragrafo from "../utils/Paragrafo.js";

import { Container } from "./style.js"

function TelaCadastro() {
    const arrayInputs = ['Nome', 'E-mail', 'Senha', 'Confirme a senha'];
    
    const navigate = useNavigate();
    const [dadosCadastro, setDadosCadastro] = useState({
        name: '', email: '', password: '', passwordConfirm: ''
    });
    console.log(dadosCadastro);

    async function postDadosCadastro() {
        try{
            const post = await axios.post('http://localhost:27017/cadastro', dadosCadastro);
            console.log(post);
            navigate('/login');
        }
        catch(error){
            console.log(error);
        }    
    }

    function enviarCadastro(event){
        event.preventDefault();
        postDadosCadastro();
    }

    return ( 
        <Container>
            <header>MyWallet</header>
            <form onSubmit={enviarCadastro}>
                <div className="inputs">
                    <input type="text" placeholder={arrayInputs[0]} value={dadosCadastro.name} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, name: e.target.value})}/>
                    <input type="text" placeholder={arrayInputs[1]} value={dadosCadastro.email} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, email: e.target.value})}/>
                    <input type="text" placeholder={arrayInputs[2]} value={dadosCadastro.password} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, password: e.target.value})}/>
                    <input type="text" placeholder={arrayInputs[3]} value={dadosCadastro.passwordConfirm} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, passwordConfirm: e.target.value})}/>
                </div>
                <div className="botao">
                    <Botao conteudo="Cadastrar" />
                </div>
            </form>
            <Link to="/login">
                <Paragrafo conteudo="Já tem uma conta? Entre agora!" />
            </Link> 
        </Container> 
    );
}

export default TelaCadastro;