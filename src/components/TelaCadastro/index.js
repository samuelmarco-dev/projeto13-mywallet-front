import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dotenv from 'dotenv';

import Botao from "../utils/Botao.js";
import Paragrafo from "../utils/Paragrafo.js";
import swal from 'sweetalert';

import { ThreeDots } from 'react-loader-spinner';
import { Container } from "./style.js";
dotenv.config();

function TelaCadastro() {
    const arrayInputs = ['Nome', 'E-mail', 'Senha', 'Confirme a senha'];
    
    const navigate = useNavigate();
    const [dadosCadastro, setDadosCadastro] = useState({
        name: '', email: '', password: '', passwordConfirm: ''
    });
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);

    function limparDados() {
        setDadosCadastro({
            name: '', email: '', password: '', passwordConfirm: ''
        });
    }

    function postDadosCadastro() {
        const objetoCadastro = {
            name: (dadosCadastro.name).trim(), email: dadosCadastro.email, password: dadosCadastro.password
        };
        setDisable(true);
        setLoading(true);

        const promise = axios.post(`${process.env.REACT_APP_API}sign-up`, objetoCadastro);
        promise.then((response) => {
            setTimeout(() => {
                swal(`Status: ${response.status}! Cadastro realizado com sucesso!`); 
                limparDados();
                navigate('/login');
            } , 1200);
        }).catch((err) => {
            setTimeout(() => {
                setDisable(false);
                setLoading(false);

                if(typeof(err.response.data) === 'string'){
                    swal(`Status: ${err.response.status}! Erro ao cadastrar usuário!`, err.response.data);
                    setDadosCadastro({...dadosCadastro, name: ''});
                }
                if(typeof(err.response.data) === 'object'){
                    (err.response.data).forEach(element => {
                        alert(element);
                    });
                    limparDados();
                }
                if(typeof(err.response.data) !== 'object' && typeof(err.response.data) !== 'string'){
                    swal(`Status: ${err.response.status}! Erro ao cadastrar usuário!`);
                    limparDados();
                }
            } , 1000);
        });
    }

    function enviarCadastro(event){
        event.preventDefault();
        if(dadosCadastro.password === dadosCadastro.passwordConfirm){
            postDadosCadastro();
        }else{
            swal("Há divergência entre as senhas!");
            setDadosCadastro({...dadosCadastro, passwordConfirm: ''});
        }
    }

    return ( 
        <Container>
            <header>MyWallet</header>
            <form onSubmit={enviarCadastro}>
                <div className="inputs">
                    <input type="text" placeholder={arrayInputs[0]} value={dadosCadastro.name} required disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, name: e.target.value})} /> 
                    <input type="email" placeholder={arrayInputs[1]} value={dadosCadastro.email} required disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, email: e.target.value})} />
                    <input type="password" placeholder={arrayInputs[2]} value={dadosCadastro.password} required disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, password: e.target.value})} />
                    <input type="password" placeholder={arrayInputs[3]} value={dadosCadastro.passwordConfirm} required disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, passwordConfirm: e.target.value})} />
                </div>
                <div className="botao">
                    {
                        loading ?  <Botao conteudo={<ThreeDots color="#fff" height={13} />} tipo="submit" disabled={disable} /> 
                        : <Botao tipo="submit" conteudo="Cadastrar" disabled={disable} />
                    }
                </div>
            </form>
            <Link to="/login">
                <Paragrafo conteudo="Já tem uma conta? Entre agora!" />
            </Link> 
        </Container> 
    );
}

export default TelaCadastro;