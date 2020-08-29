import React from 'react'
import { Link } from "gatsby"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

import { ServicosTitle, ServicosQuote, ServicosDescription } from '../cultura_clima_organizacionais/style'

export default function rh() {
    return (
        <div>
            <Header/>
                <ServicosTitle>
                    <h1>Programa de treinamento: RH Estratégico</h1>
                </ServicosTitle>
                <ServicosQuote>
                    <p><em>“Não basta enxergar apenas a árvore, é preciso também ver a floresta. Não basta enxergar a floresta, é necessário também enxergar a árvore.”</em>
                    <br/> 
                    <br/> 
                    National Geographic</p>
                </ServicosQuote>
                <ServicosDescription>
                    <p>Uma questão ainda recorrente em muitas organizações é o fato do departamento de RH ainda posicionar-se como uma área estanque à organização. Isso se deve a diversos fatores, desde uma postura do próprio dono da empresa, da profissonal de RH ou cultura organizacional.
                    <br/>
                    <br/>
                    Este treinamento de três dias, que pode ser individual ou em grupo, busca apresentar uma visão geral da organização, bem como da necessidade de integração da área de gestão de pessoas com as demais, de forma que ela possa contribuir de maneira mais significativa e assertiva para a estratégia da empresa.
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
