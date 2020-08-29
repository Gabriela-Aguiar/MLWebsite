import React from 'react'
import { Link } from "gatsby"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

import { ServicosTitle, ServicosQuote, ServicosDescription } from '../cultura_clima_organizacionais/style'

export default function internacionalizacao() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: Internacionalização de Excecutivos</h1>
                </ServicosTitle>
                <ServicosQuote>
                    <p><em>“Ao viver em outro país, você nunca mais será o mesmo”.</em></p>
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
