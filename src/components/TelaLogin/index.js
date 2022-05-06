import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import ContextoDadosUsuario from "../context/DadosUsuario";
import ContextoEntradaSaida from "../context/EntradaSaida";
import swal from "sweetalert";

import Botao from "../utils/Botao";
import Paragrafo from "../utils/Paragrafo";

import { ThreeDots } from 'react-loader-spinner';
import { Container } from "./style.js";

function TelaLogin() {
    const arrayInputs = ['E-mail', 'Senha'];

    const navigate = useNavigate();
    const { setNomeUsuario, setTokenUsuario} = useContext(ContextoDadosUsuario);
    const { setEmailUsuario } = useContext(ContextoEntradaSaida)
    const [dadosLogin, setDadosLogin] = useState({
        email: '', password: ''
    });
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);

    function limparDados(){
        setDadosLogin({
            email: '', password: ''
        });
    }

    function postDadosLogin(){
        setDisable(true);
        setLoading(true);

        const promise = axios.post('http://localhost:5000/sign-in', dadosLogin);
        promise.then((response)=>{
            setTimeout(() => {
                const { data } = response;
                setNomeUsuario(data.name);
                setEmailUsuario(dadosLogin.email);
                setTokenUsuario(data.token);
                localStorage.setItem('name', data.name);
                localStorage.setItem('email', dadosLogin.email);
                localStorage.setItem('token', data.token);
                navigate('/carteira');
            }, 1200);
        }).catch((err)=>{
            setTimeout(() => {
                setDisable(false);
                setLoading(false);

                if(err.response.status === 401){
                    limparDados();
                }
                if(typeof(err.response.data) === 'string'){
                    swal(`Status: ${err.response.status}! Erro ao fazer login!`, err.response.data);
                    setDadosLogin({...dadosLogin, password: ''});
                }
                if(typeof(err.response.data) === 'object'){
                    (err.response.data).forEach(element => {
                        alert(element);
                    });
                    limparDados();
                }
                if(typeof(err.response.data) !== 'object' && typeof(err.response.data) !== 'string'){
                    swal(`Status: ${err.response.status}! Erro ao fazer login!`);
                }
            }, 1000);
        });
    }

    function enviarDados(event){
        event.preventDefault();
        const { email, password } = dadosLogin;
        if(!email || !password){
            swal('Para fazer login é necessário informar seu email e senha. Caso não possua cadastro, cadastre-se');
        }
        postDadosLogin();
    }

    return ( 
        <Container>
            <header>MyWallet</header>
            <form onSubmit={enviarDados}>
                <div className="inputs">
                    <input type="email" placeholder={arrayInputs[0]} value={dadosLogin.email} required disabled={disable}
                    onChange={(e)=>setDadosLogin({...dadosLogin, email: e.target.value})}/>
                    <input type="password" placeholder={arrayInputs[1]} value={dadosLogin.password} required disabled={disable}
                    onChange={(e)=>setDadosLogin({...dadosLogin, password: e.target.value})}/>
                </div>
                <div className="botao">
                    {
                        loading ? <Botao conteudo={<ThreeDots color="#fff" height={13} />} tipo="submit" disabled={disable} /> 
                        : <Botao tipo="submit" conteudo="Entrar" disable={disable} />
                    }
                </div>
            </form>
            <Link to="/cadastro">
                <Paragrafo conteudo="Primeira vez? Cadastre-se!" />
            </Link>
        </Container> 
    );
}

export default TelaLogin;