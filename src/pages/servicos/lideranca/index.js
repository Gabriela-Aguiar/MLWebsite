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
export default function lideranca() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: Liderança</h1>
                </ServicosTitle>
                <ServicosQuote>
                    <p><em>“Conte-me e eu esqueço. Mostre-me e eu apenas me lembro. Envolva-me e eu compreendo.”.</em>
                    <br/>
                    <br/>
                    Confúcio
                    </p>
                </ServicosQuote>
                <ServicosDescription>
                    <p>Liderar pessoas continua sendo o grande desafio para grande parte das empresas, independentemente de seu porte. 
                    <br/>
                    <br/>
                    Há incontáveis trabalhos acadêmicos e livros sobre liderança e fórmulas para o desenvolvimento das competências para ser um bom líder.
                    <br/>
                    <br/>
                    A proposta deste treinamento é, em realidade, um trabalho que leve as pessoas a uma reflexão profunda sobre quais são seus anseios, suas competências atuais, os porquês da necessidade de promover melhorias em sua forma de pensar, falar e agir e quais caminhos poderão ser trilhados.
                    <br/>
                    <br/>
                    Em quatro dias, que poderá ser individual ou em grupo, as pessoas terão oportunidade de buscar uma trajetória de autoconhecimento que possibilite que elas elaborem ações que permitam inspirar os outros, as equipes e que, como disse Confúcio, que viveu há mais de 2.500 anos, envolva as pessoas em direção ao aprimoramento e ao atingimento dos objetivos de vida e das organizações.
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
