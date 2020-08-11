import React from 'react'

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

import { ServicosTitle, ServicosQuote, ServicosDescription } from '../cultura_clima_organizacionais/style'

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
                </ServicosDescription>
            <Footer/>
        </div>
    )
}
