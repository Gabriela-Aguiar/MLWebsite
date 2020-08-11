import React from 'react'

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

import { ServicosTitle, ServicosQuote, ServicosDescription } from '../cultura_clima_organizacionais/style'

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
                </ServicosDescription>
            <Footer/>
        </div>
    )
}
