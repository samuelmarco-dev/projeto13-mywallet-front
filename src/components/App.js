import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ContextoEntradaSaida from "./context/EntradaSaida.js";

import TelaInicial from "./TelaInicial";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaCarteira from "./TelaCarteira";
import TelaDados from "./TelaDados";

import "./../assets/css/reset.css";

function App() {
    const [entradaSaida, setEntradaSaida] = useState(null);

    return (
        <ContextoEntradaSaida.Provider value={{entradaSaida, setEntradaSaida}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< TelaInicial />} />
                    <Route path="/login" element={<TelaLogin />} />
                    <Route path="/cadastro" element={< TelaCadastro />} />
                    <Route path="/carteira" element={<TelaCarteira />} />
                    <Route path="/enviarDados" element={<TelaDados />} />
                </Routes>
            </BrowserRouter>
        </ContextoEntradaSaida.Provider>
    );
}

export default App;