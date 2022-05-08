import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { IoIosLogOut } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import ContextoEntradaSaida from "../context/EntradaSaida.js";
import ContextoDadosUsuario from "../context/DadosUsuario.js";

import swal from "sweetalert";
import { Container } from "./style.js"

function TelaCarteira() {
    let saldo = 0;

    const navigate = useNavigate();
    const { setEntradaSaida, emailUsuario, setEmailUsuario } = useContext(ContextoEntradaSaida);
    const { nomeUsuario, tokenUsuario, setNomeUsuario, setTokenUsuario } = useContext(ContextoDadosUsuario);
    const [dadosCarteira, setDadosCarteira] = useState([]);


    function nomeProprio(nomeProprio) {
        return `Olá, ${nomeProprio.charAt(0).toUpperCase() + nomeProprio.slice(1)}`;
    }

    function saldoCarteiraUsuario(array){
        if(array.length > 0){
            array.forEach(element => {
                const valor = Number(element.value);
                if(element.type === 'entrada'){
                    saldo += valor;
                }
                if(element.type === 'saida'){
                    saldo -= valor;
                }
            });
        } else{
            saldo = 0;
        }

        if (saldo > 0){
            return saldo.toFixed(2).replace('.', ',');
        }else{
            return saldo.toFixed(2).replace('.', ',').replace('-', '');
        }
    }

    function buscarDadosCarteira() {
        const objConfig = {
            headers: 
                {
                    Authorization: `Bearer ${tokenUsuario ? tokenUsuario : localStorage.getItem('token')}`,
                    email: emailUsuario ? emailUsuario : localStorage.getItem('email')
                }
        };
        axios.get('http://localhost:5000/wallet', objConfig)
        .then(res => {
            setDadosCarteira(res.data);
        }).catch(err => {
            if(err.response.status === 500){
                swal('Erro interno do servidor, tente novamente mais tarde.');
                navigate('/');
            }
            swal(`Status: ${err.response.status}! Erro ao buscar dados da carteira`);
        });
    }

    function retornaParaHome() {
        swal({
            title: "Deseja sair?",
            text: "Você será redirecionado para a página inicial.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                localStorage.removeItem('token');
                localStorage.removeItem('name');
                localStorage.removeItem('email');
                localStorage.removeItem('info');
                setEntradaSaida(null);
                setEmailUsuario(null);
                setNomeUsuario(null);
                setTokenUsuario(null);
                navigate('/');
            }
        });
    }

    useEffect(() => {
        if(tokenUsuario === null && localStorage.getItem('token') === null){
            swal('Você precisa estar logado para acessar esta página.');
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('info');
            setEntradaSaida(null);
            setEmailUsuario(null);
            setNomeUsuario(null);
            setTokenUsuario(null);
            navigate('/login');
        }else{
            buscarDadosCarteira();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(dadosCarteira);
    return ( 
        <Container>
            <header>
                {
                    (nomeUsuario || localStorage.getItem('name')) ? 
                    <>
                    <p>{nomeProprio(!nomeUsuario ? localStorage.getItem('name') : nomeUsuario)}</p>
                    <IoIosLogOut className="icon" onClick={()=> retornaParaHome()} />
                    </> : <></>
                }
            </header>
            <main>
                {
                dadosCarteira.length > 0 ? 
                <>
                    <nav>
                        {
                            dadosCarteira.reverse().map(capital => {
                                const { _id, type, description, value, date } = capital;
                                const valor = Number(value);
                                return (
                                    <div className="registro" key={_id}>
                                        <span>{date}</span>
                                        <p>{description}</p>
                                        <strong className={type === 'entrada' ? 'positivo' : 'negativo'}>{valor.toFixed(2).replace('.', ',')}</strong>
                                    </div>
                                )
                            })
                        }
                    </nav>
                    <p className="result">
                        <strong className="saldo">SALDO</strong>
                        <strong className={saldo > 0 ? 'valor positivo' : 'valor negativo'}>
                            {saldoCarteiraUsuario(dadosCarteira)}
                        </strong>
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