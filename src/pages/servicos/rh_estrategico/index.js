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

export default function rh() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: RH Estratégico</h1>
                </ServicosTitle>
                <ServicosQuote>
                    <p><em>“Não basta enxergar apenas a árvore, é preciso também ver a floresta. Não basta enxergar a floresta, é necessário também enxergar a árvore.”</em>
                    <br/> 
                    <br/> 
                    National Geographic</p>
                </ServicosQuote>
                <ServicosDescription>
                    <p>Uma questão ainda recorrente em muitas organizações é o fato do departamento de RH ainda posicionar-se como uma área estanque à organização. Isso se deve a diversos fatores, desde uma postura do próprio dono da empresa, da profissonal de RH ou cultura organizacional.
                    <br/>
                    <br/>
                    Este treinamento de três dias, que pode ser individual ou em grupo, busca apresentar uma visão geral da organização, bem como da necessidade de integração da área de gestão de pessoas com as demais, de forma que ela possa contribuir de maneira mais significativa e assertiva para a estratégia da empresa.
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
