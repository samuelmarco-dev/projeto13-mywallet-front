import { Container } from "./style.js";

import Img from "../../assets/img/logo.jpg";
 
function TelaInicial() {
    return ( 
        <Container>
            Sou o login
            <img src={Img} alt="imagem" />
        </Container> 
    );
}

export default TelaInicial;