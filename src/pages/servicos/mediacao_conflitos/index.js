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

export default function mediacao() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: Mediação de Conflitos</h1>
                </ServicosTitle>
                <ServicosQuote>
                    <p><em>“Respeite o ponto de vista das pessoas, às vezes estamos vendo a mesma coisa, porém de forma diferente”.</em></p>
                </ServicosQuote>
                <ServicosDescription>
                    <p>Embora conflitos façam parte de qualquer relacionamento, eles podem e devem ser trabalhados de forma positiva para a vida e para as organizações.
                    <br/>
                    <br/>
                    Este treinamento de dois dias, voltado a qualquer colaborador,  busca levar as pessoas a refletirem sobre sua forma de ser e de com encaram diferentes posições e ideias no ambiente laboral, e a melhor forma de tratar essas diferenças em prol de um ambiente saudável e colaborativo.
                    <br/>
                    <br/>
                    Outro treinamento, de quatro dias, além dos aspectos acima, procurar desenvolver a capacidade do gestor em mediar conflitos e restaurar as relações. É a chamada mediação restaurativa, ou seja, não basta resolver determinado conflito, é fundamental que as relações entre as pessoas envolvidas se restabeleçam.
                    <br/>
                    <br/>
                    Obs: algumas vezes a organização necessita do trabalho de um profissional externo para realizar a mediação de um determinado conflito, o que pode ser feito com absoluta confidencialidade por esta Empresa.
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
