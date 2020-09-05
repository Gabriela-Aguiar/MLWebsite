import React from 'react'
import styled from 'styled-components';

import Header from "../../components/Header"
import Footer from "../../components/Footer"

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
const CurriculoContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100vw;
    justify-content: center;
    align-items: center;
    color: #fff;

    p {
        text-align: center;
        width: 60vw;
        font-size: 22px;
        line-height: 1.6;
        text-align: justify;
    }
`

const Fotos = styled.div `
    width: 100vw;
    display:flex;
    justify-content: space-around;
    margin: 70px 0;

    img {
        width: 400px;
        border-radius: 5px;
    }
`

export default function curriculo() {
    return (
        <div>
            <Header/>
                <Titulo>
                    <h2>Currículo</h2>
                    <hr/>
                </Titulo>
                <CurriculoContainer>
                    <Fotos>
                        <img src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/mauricioApresentando.jpg"/>
                        <p>Possui vasta experiência profissional, tendo trabalhado no <em><b>Banco do Brasil</b></em>, nas áreas de processos, negócios e gestão de pessoas, inclusive no exterior,além de ter atuado como educador corporativo e professor universitário.
                        <br/>
                        <br/>
                        Possui também uma sólida formação acadêmica, sendo bacharel em
                        Administração <em><b>(Fundação Instituto Tecnológico de Osasco)</b></em>, licenciado em Psicologia Clínica <em><b>(Universidad Latinoamericana de México)</b></em>, com certificações em Mentoring, Coaching, Psicologia Positiva, Gestão Empresarial de Qualidade de Vida no Trabalho <em><b>(FIA-USP)</b></em>, </p>
                        </Fotos>
                    <Fotos>
                        <p>
                        além de pós-graduações em Administração Geral <em><b>(FIA-USP)</b></em>, Finanças <em><b>(PUC-RIO)</b></em>, Ciências Políticas <em><b>(UFMG)</b></em>, Biologia <em><b>(UFLA)</b></em>, MBA em Gestão Avançada de Negócios <em><b>(UFMT)</b></em>, Mestrado em Recursos Humanos <em><b>(Universidade Mackenzie)</b></em>, e, atualmente, doutorando em Ciências Empresariais e Sociais <em><b>(Universidad de Ciencias Empresariales y Sociales de Buenos Aires)</b></em>.
                        <br/>
                        <br/>
                        No momento é também Diretor-Representante da <em><b>Câmara de Comércio México-Brasil – Camebra</b></em>.</p>
                        <img src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/mauricioCamebra.jpg"/>
                    </Fotos>
                </CurriculoContainer>
            <Footer/>
        </div>
    )
}
