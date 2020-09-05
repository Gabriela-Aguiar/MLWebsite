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

export default function gestao() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: Gestão com Equipe</h1>
                </ServicosTitle>
                <ServicosQuote>
                    <p><em>“O fracasso é uma oportunidade para recomeçar com mais inteligência”.</em>
                    <br/>
                    <br/>
                    Henry Ford
                    </p>
                </ServicosQuote>
                <ServicosDescription>
                    <p>Trabalhar em outro país é, sem dúvida, um grande desafio. Cultura, língua, realidade social, econômica diferentes…
                    <br/>
                    <br/>
                    Este treinamento de um dia e meio busca esclarecer os principais desafios que o profissional encontrará em sua nova trajetória, bem como de sua família, e as formas de trabalhar esses desafios de modo que a mudança se dê da forma menos abrupta possível e possa ser recompensadora e promotora de crescimento pessoal e profissional.
                    <br/>
                    <br/>
                    O treinamento também inclui acompanhamento no primeiro, terceiro e sexto mês da expatriação.
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
