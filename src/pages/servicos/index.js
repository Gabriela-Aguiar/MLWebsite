import React from 'react'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { Link } from "gatsby"

import { Titulo } from "../styles"
import { ServicosContainer, List } from "./style"

export default function servico() {
    return (
        <div>
            <Header/>
            <Titulo>
                <h2>Serviços</h2>
                <hr/>
            </Titulo>
            <ServicosContainer>
                <List>
                    <ul>
                        <li><Link to="/servicos/cultura_clima_organizacionais">Programa de treinamento: Cultura e Clima Organizacionais</Link></li>
                        <li><Link to="/servicos/internacionalizacao_executivos">Programa de treinamento: Internacionalização de Executivos</Link></li>
                        <li><Link to="/servicos/mudanca_vida_carreira">Programa de treinamento: Mudança de vida e carreira</Link></li>
                        <li><Link to="/servicos/mexico_brasil">Programa de treinamento: Relações Comerciais, Profissionais e Culturais entre México e Brasil</Link></li>
                        <li><Link to="/servicos/coaching">Programa de treinamento: Coaching</Link></li>
                    </ul>
                </List>
                <List>
                    <ul>
                        <li><Link to="/servicos/lideranca">Programa de treinamento: Liderança</Link></li>
                        <li><Link to="/servicos/gestao_equipe">Programa de treinamento: Gestão de Equipe</Link></li>
                        <li><Link to="/servicos/mediacao_conflitos">Programa de treinamento: Mediação de Conflitos</Link></li>
                        <li><Link to="/servicos/rh_estrategico">Programa de treinamento: RH Estratégico</Link></li>
                        <li><Link>Programa de treinamento: Inteligência Emocional</Link></li>
                    </ul>
                </List>
            </ServicosContainer>
            <Footer/>
        </div>
    )
}
