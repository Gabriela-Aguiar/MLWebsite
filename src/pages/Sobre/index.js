import React from 'react'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Titulo } from "../styles"
import { Sobre } from "./styles"



export default function sobre() {
    return (
        <div>
            <Header/>
                <Titulo>
                    <h2>Sobre</h2>
                    <hr/>
                </Titulo>
                <Sobre>
                    <p> Mauricio Lambiasi 
                        Desenvolvimento Humano & Negócios dedica-se ao aprimoramento das organizações por meio do crescimento e desenvolvimento humano, acreditando que somente pelo diálogo, treinamento e autoconhecimento é possível transformar pessoas, empresas e sociedade. 
                        <br/>
                        <br/>
                        O nosso diferencial é trabalhar o desenvolvimento humano & negócios de forma personalizada, iniciando-se com um diagnóstico
                        preciso que permitirá a aplicação das melhores soluções.
                        <br/>
                        <br/>
                        Nossos valores: Humanização dos locais de trabalho, diálogo permanente, mesmo em situações de conflito, equidade, responsabilidade, assertividade, ética e sustentabilidade nos negócios.  
                        <br/>
                        <br/>
                        Nossa missão: Ser a empresa que contribui para a transformação das organizações e das pessoas por meio de técnicas consagradas, mas sempre preservando o caráter humanista nas relações.
                        </p>
                </Sobre>
            <Footer/>
        </div>
    )
}
