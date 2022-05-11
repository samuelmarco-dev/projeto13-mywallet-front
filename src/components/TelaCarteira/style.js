import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #8C11BE;
    padding: 0 24px;
    font-family: 'Raleway', sans-serif;

    header{
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;

        p{
            max-width: 80%;
            max-height: 35px;
            font-weight: 700;
            font-size: 26px;
            line-height: 31px;
            color: #FFFFFF;
            text-align: left;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        .icon {
            font-size: 30px;
            color: #FFFFFF;
        }
    }

    main{
        width: 100%;
        height: calc(100% - 140px - 65px - 20px);
        margin-top: 20px;
        background-color: #FFFFFF;
        position: relative;

        nav{
            width: 100%;
            height: calc(100% - 30px);
            padding: 0 13px;
            overflow-y: scroll;

            ::-webkit-scrollbar{
                width: 8px;
            }

            ::-webkit-scrollbar-track{
                background: #f1f1f1;
                border-radius: 30px;
                -webkit-border-radius: 30px;
                -moz-border-radius: 30px;
                -ms-border-radius: 30px;
                -o-border-radius: 30px;
            }

            ::-webkit-scrollbar-thumb{
                background: #D3D3D3;
                border-radius: 30px;
                -webkit-border-radius: 30px;
                -moz-border-radius: 30px;
                -ms-border-radius: 30px;
                -o-border-radius: 30px;
            }
            
            .registro{
                width: 100%;
                height: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                margin-bottom: 5px;
                
                span{color: #C6C6C6;}

                p{
                    width: 140px;
                    max-width: 150px;
                    max-height: 30px;
                    overflow: hidden;
                    text-align: center;
                    color: #000000;
                }
            }
        }

        .not-registros{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
            p{
                width: 70%;
                max-height: 50px;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                text-align: center;
                color: #868686;
                overflow: hidden;
            }
        }

        .result{
            width: 100%;
            height: 20px;
            position: absolute;
            left: 0;
            bottom: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 13px;

            .saldo{
                font-weight: 700;
                font-size: 17px;
                line-height: 20px;
                text-align: left;
                color: #000000;
            }

            .valor{
                font-family: Raleway;
                font-size: 17px;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 0em;
                text-align: right;
                
                .positivo{color: #03AC00;}
                .negativo{color: #C70000;}
            }
        }
    }

    footer{
        width: 100%;
        height: 115px;
        position: fixed;
        left: 0;
        bottom: 16px;
        padding: 0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .entrada, .saida{
            width: 45%;
            height: 115px;
            position: relative;
            border: none;
            border-color: #A328D6;
            border-radius: 5px;
            background: #A328D6;

            p{
                width: 70%;
                max-height: 50px;
                font-weight: 700;
                font-size: 17px;
                line-height: 20px;
                color: #FFFFFF;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                position: absolute;
                left: 10px;
                bottom: 10px;
                text-align: left;
                overflow: hidden;
            }
        }

        .iconEntrada, .iconSaida{
            position: absolute;
            left: 10px;
            top: 10px;
            color: #FFFFFF;
            font-size: 30px;
        }
    }

    @media (min-width: 768px) {
        main nav .registro p{
            width: auto;
            max-width: 85%;
        }
    }
`;
