import AnimacaoSvg from "./svg.js";
import Botao from "../utils/Botao.js";
import Paragrafo from "../utils/Paragrafo.js";

import { Link } from "react-router-dom";

import { AiFillBank } from "react-icons/ai";
import { Container } from "./style.js";
 
function TelaInicial() {
    return ( 
        <Container>
            <header>
                <AiFillBank className="icone" />
                <Paragrafo conteudo="MyWallet" />
            </header>
            <aside>
                <AnimacaoSvg />
            </aside>
            <div className="botoes">
                <Link to="/login">
                    <Botao conteudo="Ir para Tela de Login" />
                </Link>
                <Link to="/cadastro">
                    <Botao conteudo="Ir para Tela de Cadastro" />
                </Link>
            </div>
        </Container> 
    );
}

export default TelaInicial;