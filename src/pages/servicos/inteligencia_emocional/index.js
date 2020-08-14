import React from 'react'

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

import { ServicosTitle, ServicosQuote, ServicosDescription } from '../cultura_clima_organizacionais/style'

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
                </ServicosDescription>
            <Footer/>
        </div>
    )
}
