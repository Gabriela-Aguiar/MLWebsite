import React from 'react'
import { Link } from "gatsby"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

import { ServicosTitle, ServicosQuote, ServicosDescription } from '../cultura_clima_organizacionais/style'

export default function mudanca() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: Mudança de vida e carreira</h1>
                </ServicosTitle>
                <ServicosQuote>
                    <p><em>“O segredo da mudança é focar toda a sua energia, não em combater o velho, mas sim em construir o novo.”</em>
                    <br/> 
                    <br/> 
                    Sócrates</p>
                </ServicosQuote>
                <ServicosDescription>
                    <p>Este treinamento, de três dias,  busca contribuir para que o colaborador entenda o que está ocorrendo com suas eventuais insatisfações, anseios, dúvidas com relação à sua vida profissional e possa, a partir de orientações,  reflexões e autoconhecimento, elaborar um plano para  que possa trilhar sua jornada com mais confiança, determinação e assertividade.
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
