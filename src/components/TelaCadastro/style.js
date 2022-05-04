import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header{
        width: 100%;
        height: 70px;
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .inputs, .botao{
        padding: 0 23px;
    }

    .inputs{
        width: 100%;
        height: auto;
        margin-top: 24px;

        input{
            width: 100%;
            height: 50px;
            border-radius: 5px;
            margin-bottom: 13px;
            padding: 0 16px;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
            text-align: left;
            border: none;
        }
    }

    .botao{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        button{
            width: 100%;
            height: 46px;
            background-color: #A328D6;
            border-radius: 5px;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }
    }

    p{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 12px;
    }
`;