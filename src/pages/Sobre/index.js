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

const Sobre= styled.div`
    padding: 80px 50px;
    font-size: 25px;
    line-height: 1.6;
    text-align: justify;
    color: #fff;
`

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
