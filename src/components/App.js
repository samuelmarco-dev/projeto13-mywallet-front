import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaInicial from "./TelaInicial";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaCarteira from "./TelaCarteira";

import "./../assets/css/reset.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< TelaInicial />} />
                <Route path="/login" element={<TelaLogin />} />
                <Route path="/cadastro" element={< TelaCadastro />} />
                <Route path="/carteira" element={<TelaCarteira />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;