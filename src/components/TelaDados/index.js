import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ContextoEntradaSaida from "../context/EntradaSaida.js";

import Paragrafo from "../utils/Paragrafo.js";
import Botao from "../utils/Botao.js";

import { Container } from "./style.js"

function TelaDados() {
    const arrayInputs = ['Valor', 'Descrição'];

    const navigate = useNavigate();
    let { entradaSaida } = useContext(ContextoEntradaSaida);

    if(entradaSaida === null){
        entradaSaida = localStorage.getItem('info');
    }

    return (  
        <Container>
            <header>
                <Paragrafo conteudo={entradaSaida === 'entrada' ? 'Nova entrada' : 'Nova saída'} />
            </header>
            <article>
                <div className="inputs">
                    <input type="text" placeholder={arrayInputs[0]} />
                    <input type="text" placeholder={arrayInputs[1]} />
                </div>
                <div className="botao">
                    <Botao conteudo={entradaSaida === 'entrada' ? 'Salvar entrada' : 'Salvar saída'} 
                    click={()=>navigate('/carteira')}/>
                </div>
            </article>
        </Container>
    );
}

export default TelaDados;