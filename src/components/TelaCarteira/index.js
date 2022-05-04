import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosLogOut } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import ContextoEntradaSaida from "../context/EntradaSaida.js";

import { Container } from "./style.js"

function TelaCarteira() {
    const dados = 1;

    const navigate = useNavigate();
    const { setEntradaSaida } = useContext(ContextoEntradaSaida);

    return ( 
        <Container>
            <header>
                <p>Olá, Fulano</p>
                <IoIosLogOut className="icon" onClick={()=> navigate('/')}/>
            </header>
            <main>
                {
                dados > 0 ? 
                <>
                    <nav>
                        <div className="registro">
                            <span>30/11</span>
                            <p>Almoço Mãe</p>
                            <strong className="negativo">39,90</strong>
                        </div>
                        <div className="registro">
                            <span>27/11</span>
                            <p>Mercado</p>
                            <strong className="negativo">542,54</strong>
                        </div>
                        <div className="registro">
                            <span>26/11</span>
                            <p>Compras churrasco</p>
                            <strong className="negativo">67,60</strong>
                        </div>
                        <div className="registro">
                            <span>20/11</span>
                            <p>Empréstimo Maria</p>
                            <strong className="positivo">500,00</strong>
                        </div>
                        <div className="registro">
                            <span>15/11</span>
                            <p>Salário</p>
                            <strong className="positivo">3000,00</strong>
                        </div>
                    </nav>
                    <p className="result">
                        <strong className="saldo">SALDO</strong>
                        <strong className="valor positivo">2849,96</strong>
                    </p>
                </>
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