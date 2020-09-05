import React from "react"
import styled from "styled-components"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { Link } from "gatsby"

const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  h2 {
    font-size: 40px;
    font-weight: normal;
    margin: 20px 0 10px 0;
  }

  p {
    font-size: 25px;
    margin-top: 50px;
  }

  hr {
    width: 10%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(93, 166, 173, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
`

const ServicosContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  color: #fff;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0;

  li {
    font-size: 20px;
    margin: 30px 0;
  }

  a {
    color: #000;
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #5da6ad;
    cursor: pointer;
  }
`

export default function servico() {
  return (
    <div>
      <Header />
      <Titulo>
        <h2>Serviços</h2>
        <hr />
      </Titulo>
      <ServicosContainer>
        <List>
          <ul>
            <li>
              <Link to="/servicos/cultura_clima_organizacionais">
                Programa de treinamento: Cultura e Clima Organizacionais
              </Link>
            </li>
            <li>
              <Link to="/servicos/internacionalizacao_executivos">
                Programa de treinamento: Internacionalização de Executivos
              </Link>
            </li>
            <li>
              <Link to="/servicos/mudanca_vida_carreira">
                Programa de treinamento: Mudança de vida e carreira
              </Link>
            </li>
            <li>
              <Link to="/servicos/mexico_brasil">
                Programa de treinamento: Relações Comerciais, Profissionais e
                Culturais entre México e Brasil
              </Link>
            </li>
            <li>
              <Link to="/servicos/coaching">
                Programa de treinamento: Coaching
              </Link>
            </li>
          </ul>
        </List>
        <List>
          <ul>
            <li>
              <Link to="/servicos/lideranca">
                Programa de treinamento: Liderança
              </Link>
            </li>
            <li>
              <Link to="/servicos/gestao_equipe">
                Programa de treinamento: Gestão de Equipe
              </Link>
            </li>
            <li>
              <Link to="/servicos/mediacao_conflitos">
                Programa de treinamento: Mediação de Conflitos
              </Link>
            </li>
            <li>
              <Link to="/servicos/rh_estrategico">
                Programa de treinamento: RH Estratégico
              </Link>
            </li>
            <li>
              <Link to="/servicos/inteligencia_emocional">
                Programa de treinamento: Inteligência Emocional
              </Link>
            </li>
          </ul>
        </List>
      </ServicosContainer>
      <Footer />
    </div>
  )
}
