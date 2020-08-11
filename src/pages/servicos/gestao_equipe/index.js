import React from 'react'

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

import { ServicosTitle, ServicosQuote, ServicosDescription } from '../cultura_clima_organizacionais/style'

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
                </ServicosDescription>
            <Footer/>
        </div>
    )
}
