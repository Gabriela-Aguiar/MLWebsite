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

export default function mexico() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento:  Relações Comerciais, Profissionais e Culturais entre México e Brasil</h1>
                </ServicosTitle>
                <ServicosDescription>
                    <p>Este programa é específico para profissionais e empresas tanto do México quanto do Brasil que desejem conhecer melhor os desafios de trabalhar e operar comercialmente com ambos os países.
                    <br/>
                    <br/>
                    Com duração de um dia, será possível conhecer a cultura, economia, particularidades, desafios e oportunidades que se apresentam tanto no México (neste caso, para profissionais e empresas brasileiros) quanto no Brasil (neste caso, para profissionais e empresas mexicanos).
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
