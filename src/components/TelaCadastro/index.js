import { Link, useNavigate } from "react-router-dom";

import Botao from "../utils/Botao.js";
import Paragrafo from "../utils/Paragrafo.js";

import { Container } from "./style.js"

function TelaCadastro() {
    const arrayInputs = ['Nome', 'E-mail', 'Senha', 'Confirme a senha'];
    
    const navigate = useNavigate();

    function enviarCadastro(event){
        event.preventDefault();
        navigate('/login');
    }

    return ( 
        <Container>
            <header>MyWallet</header>
            <form onSubmit={enviarCadastro}>
                <div className="inputs">
                    <input type="text" placeholder={arrayInputs[0]} />
                    <input type="text" placeholder={arrayInputs[1]} />
                    <input type="text" placeholder={arrayInputs[2]} />
                    <input type="text" placeholder={arrayInputs[3]} />
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