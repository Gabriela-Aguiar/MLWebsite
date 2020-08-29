import React from 'react'
import { ServicosTitle, ServicosQuote, ServicosDescription } from './style'
import { Link } from "gatsby"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

export default function cultura() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: Cultura e Clima Organizacionais</h1>
                </ServicosTitle>
                <ServicosQuote>
                    <p><em>“Os valores da organização e a satisfação dos colaboradores devem caminhar juntos”.</em></p>
                </ServicosQuote>
                <ServicosDescription>
                    <p>Cultura organizacional pode-se dizer, é a personalidade da empresa, seus valores, comportamentos, modo de ser. 
                    <br/>
                    <br/>
                    O Clima organizacional está voltado ao ambiente, à satisfação dos colaboradores. 
                    O objetivo deste treinamento de três dias é destacar e fortalecer a cultura da organização, bem como aferir o grau de satisfação dos colaboradores de modo a harmonizar ambos em prol de uma empresa sólida do ponto de vista da aplicação de seus valores e de um ambiente saudável, que promova a realização profissional e o atingimento dos objetivos organizacionais.</p>
                    <br/>
                    <br/>
                    <br/>
                    <button><Link to="/contato"> Entre em contato</Link></button>
                </ServicosDescription>
            <Footer/>
        </div>
    )
}
