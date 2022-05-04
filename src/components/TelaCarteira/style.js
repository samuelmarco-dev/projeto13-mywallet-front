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
`;