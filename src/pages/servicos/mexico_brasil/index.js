import React from 'react'
import { Link } from "gatsby"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

import { ServicosTitle, ServicosQuote, ServicosDescription } from '../cultura_clima_organizacionais/style'

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
