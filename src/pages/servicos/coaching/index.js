import React from 'react'
import styled from 'styled-components';

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

export default function coaching() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: Coaching</h1>
                </ServicosTitle>
                <ServicosQuote>
                    <p><em>“Os professores abrem a porta, mas você deve entrar por você mesmo”.</em>
                    <br/>
                    <br/>
                    Provérbio chinês</p>
                </ServicosQuote>
                <ServicosDescription>
                    <p> Muito embora o termo coaching tenha sido banalizado nos últimos tempos, trata-se, em realidade, de um excelente instrumento para que as pessoas possam trazer à tona suas necessidades, anseios, dificuldades, compreensão de si mesmas.
                    <br/>
                    <br/>
                    O trabalho de coaching permitirá que a pessoa possa construir e trilhar seu caminho, após compreender exatamente o que deseja e onde, como e quando quer chegar lá.
                    <br/>
                    <br/>
                    O prazo da aplicação da técnica de coaching será determinado em comum acordo com o coachee e/ou com a empresa patrocinadora do programa.
                    </p>
                    <span>
                    Obs: Coaching (técnica)
                    <br/>
                    Coach (aplicador da técnica)
                    <br/>
                    Coachee (pessoa que receberá a técnica)
                    </span>
                    <br/>
                    <br/>
                    <br/>
                    <button><Link to="/contato"> Entre em contato</Link></button>
                </ServicosDescription>
            <Footer/>
        </div>
    )
}
