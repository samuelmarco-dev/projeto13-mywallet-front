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
    }

    .inputs{
        width: 100%;
        height: auto;
        margin-top: 30px;

        input{
            width: 100%;
            height: 50px;
            border-radius: 5px;
            margin-bottom: 13px;
            padding: 0 16px;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
            text-align: left;
            border: none;
            background-color: #FFFFFF;
        }
    }

    .botao{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;

        button{
            width: 100%;
            height: 46px;
            background-color: #A328D6;
            border-radius: 5px;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;