import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaInicial from "./TelaInicial";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";

import "./../assets/css/reset.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< TelaInicial />} />
                <Route path="/login" element={<TelaLogin />} />
                <Route path="/cadastro" element={< TelaCadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;