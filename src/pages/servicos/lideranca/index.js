import React from 'react'
import { Link } from "gatsby"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

import { ServicosTitle, ServicosQuote, ServicosDescription } from '../cultura_clima_organizacionais/style'

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
