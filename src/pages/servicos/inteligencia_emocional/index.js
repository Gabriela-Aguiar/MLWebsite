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

export default function inteligencia() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: Inteligência Emocional</h1>
                </ServicosTitle>
                <ServicosDescription>
                    <p>Muito tem-se falado nos últimos temos sobre inteligência emocional, e realmente é um aspecto fundamental a ser desenvolvido para que se tenha uma vida plena, tanto no âmbito pessoal quanto profissional, afinal, nossas emoções estão muito mais presentes em nossa vida do que podemos imaginar, mesmo quanto pensamos que estamos sendo racionais. 
                    <br/>
                    <br/>
                    Quem possui inteligência emocional desenvolvida tem muito mais chance de evoluir na carreira e na vida de modo geral.
                    <br/>
                    <br/>
                    Este treinamento de três dias busca explicar o que realmente vem a ser <em>inteligência emocional</em>, utilizando  também os conceitos de mindset e <em>Psicologia Positiva</em>, para que os treinandos possam conhecer melhor suas emoções e como trabalhá-las, de forma a poder se desenvolver nas diversas dimensões da vida.
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
