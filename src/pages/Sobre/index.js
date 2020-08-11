import React from 'react'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Titulo, Principal } from "../styles"
import { Missao } from "./styles"

export default function sobre() {
    return (
        <div>
            <Header/>
                <Titulo>
                    <h2>Sobre</h2>
                    <hr/>
                </Titulo>
                <Principal style={{marginTop: 150}}>
                    <img src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/mauricioSobre.jpg" alt="Mauricio" style={{width:400}}/>
                    <p style={{width:750, fontSize: 26}}>  A empresa Mauricio Lambiasi 
                        Desenvolvimento Humano & Negócios Educação Corporativa & Orientação para a Vida dedica-se ao aprimoramento das organizações por meio do crescimento e desenvolvimento das pessoas, acreditando que somente pelo diálogo, treinamento, desenvolvimento e auto conhecimento é possível transformar pessoas, empresas, e a sociedade. 
                        <br/>
                        Por não ser uma empresa a mais, o trabalho de desenvolvimento é personalizado e realizado
                        somente após um diagnóstico preciso das necessidades apresentadas e sempre 
                    </p>
                </Principal>
                <p style={{fontSize: 26, marginLeft: 70, marginTop: 10, lineHeight: 1.6}}> buscando o caráter humanista nas relações, inclusive comerciais, mas com objetivos muito bem definidos, eficientes, eficazes e efetivos. Crenças: Humanização dos locais de trabalho, diálogo permanente, mesmo em situações de conflito, equidade, responsabilidade, assertividade.  </p>
                <Missao>
                    <p>  Portanto, a missão da organização é:
                        <br/>
                        <br/>
                        <b>
                        “Ser a empresa que contribui para a transformação das 
                        organizações e das pessoas por meio de técnicas consagradas 
                        mas sempre preservando o caráter humanista nas relações.“</b>
                    </p>
                </Missao>
            <Footer/>
        </div>
    )
}
