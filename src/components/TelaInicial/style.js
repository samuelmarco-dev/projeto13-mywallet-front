import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #8C11BE;

    header{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        .icone{
            font-size: 60px;
            color: #FFFFFF;
        }

        p{
            width: auto;
            height: 60px;
            padding-left: 15px;
            font-family: 'Saira Stencil One', cursive;
            font-weight: 400;
            font-size: 32px;
            line-height: 50px;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    aside{
        width: 100%;
        height: calc(100% - 150px - 250px);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        svg{
            width: 100%;
            height: 100%;
            margin-top: 30px;
            display: inline-block;
            justify-content: center;
            align-items: center;

            textPath{
                font-family: 'Saira Stencil One', cursive;
                font-size: 39px;
                line-height: 24px;
                text-align: center;
                display: block;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                width: 100%;
                height: 50px;
                background-color: red;
            }
        }
    }

    .botoes{
        width: 100%;
        height: 250px;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 23px;
        margin-bottom: 60px;

        a{
            width: 100%;
            height: 46px;
            margin-bottom: 15px;
        }

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
            margin-bottom: 15px;
        }
    }
`;