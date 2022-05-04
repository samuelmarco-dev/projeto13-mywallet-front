import { Link } from "react-router-dom";

import Botao from "../utils/Botao";
import Paragrafo from "../utils/Paragrafo";

import { Container } from "./style.js";

function TelaLogin() {
    const arrayInputs = ['E-mail', 'Senha'];

    return ( 
        <Container>
            <header>MyWallet</header>
            <form>
                <div className="inputs">
                    <input type="text" placeholder={arrayInputs[0]} />
                    <input type="text" placeholder={arrayInputs[1]} />
                </div>
                <div className="botao">
                    <Botao tipo="submit" conteudo="Entrar" />
                </div>
            </form>
            <Link to="/cadastro">
                <Paragrafo conteudo="Primeira vez? Cadastre-se!" />
            </Link>
        </Container> 
    );
}

export default TelaLogin;