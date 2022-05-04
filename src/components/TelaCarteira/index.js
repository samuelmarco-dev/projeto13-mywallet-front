import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosLogOut } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import ContextoEntradaSaida from "../context/EntradaSaida.js";

import { Container } from "./style.js"

function TelaCarteira() {
    const dados = 0;

    const navigate = useNavigate();
    const { setEntradaSaida } = useContext(ContextoEntradaSaida);

    return ( 
        <Container>
            <header>
                <p>Olá, Fulano</p>
                <IoIosLogOut className="icon"/>
            </header>
            <main>
                {
                dados > 0 ? 
                <div>
                    Sou alguns dados interessantes...
                </div>
                : 
                <div className="not-registros">
                    <p>Não há registros de entrada ou saída</p>
                </div>
                }
            </main>
            <footer>
                <div className="entrada" onClick={()=>{
                    navigate('/enviarDados');
                    setEntradaSaida('entrada');
                    localStorage.setItem('info', 'entrada');
                }}>
                    <IoIosAddCircleOutline className="iconEntrada"/>
                    <p>Nova entrada</p>
                </div>
                <div className="saida" onClick={()=>{
                    navigate('/enviarDados');
                    setEntradaSaida('saida');
                    localStorage.setItem('info', 'saída');
                }}>
                    <IoIosRemoveCircleOutline className="iconSaida"/>
                    <p>Nova saída</p>
                </div>
            </footer>
        </Container>
    );
}

export default TelaCarteira;