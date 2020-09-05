import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

const ServicosTitle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: normal;
        text-align: center;
        margin-bottom: 100px;
        width: 80vw;
        text-align: center;
        line-height: 1.6;
        color: #fff;
    }
`

const ServicosQuote = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 80px;
    color: #fff;

    p {
        width: 30vw;
        font-size: 23px;
        line-height: 1.6;
        text-align: justify;
    }
`

const ServicosDescription = styled.div `
    padding: 50px;
    margin: 50px 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 25px;
        line-height: 1.6;
        text-align: justify;
        margin-bottom: 50px;
    }

    span {
        line-height: 1.6;
        width: 100%
    }

    button {
        border: 1px solid #2B405C;
        background-color: #FFF;
        outline: none;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.5s;
        padding: 7px 10px;
    }

    a {
        text-decoration: none;
        color: #2B405C;
        font-size: 22px;
    }

    button:hover {
        background-color: #2B405C;
        color: #FFF;

        &:hover a {
        color: #fff;
        }
    }
`

export default function mudanca() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: Mudança de vida e carreira</h1>
                </ServicosTitle>
                <ServicosQuote>
                    <p><em>“O segredo da mudança é focar toda a sua energia, não em combater o velho, mas sim em construir o novo.”</em>
                    <br/> 
                    <br/> 
                    Sócrates</p>
                </ServicosQuote>
                <ServicosDescription>
                    <p>Este treinamento, de três dias,  busca contribuir para que o colaborador entenda o que está ocorrendo com suas eventuais insatisfações, anseios, dúvidas com relação à sua vida profissional e possa, a partir de orientações,  reflexões e autoconhecimento, elaborar um plano para  que possa trilhar sua jornada com mais confiança, determinação e assertividade.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <button><Link to="/contato"> Entre em contato</Link></button>
                </ServicosDescription>
            <Footer/>
        </div>
    )
}
