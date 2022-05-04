import { Container } from "./style.js"

import { IoIosLogOut } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function TelaCarteira() {
    const dados = 0;
    
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
                <div className="entrada">
                    <IoIosAddCircleOutline className="iconEntrada"/>
                    <p>Nova entrada</p>
                </div>
                <div className="saida">
                    <IoIosRemoveCircleOutline className="iconSaida"/>
                    <p>Nova saída</p>
                </div>
            </footer>
        </Container>
    );
}

export default TelaCarteira;