import React from "react"
import styled from "styled-components"

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

const ContatoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-right: 350px;

  img {
    width: 500px;
    border-radius: 5px;
  }
`
const FormContainer = styled.div`
  position: relative;
  top: -80px;
  right: -350px;
  background-color: rgb(202, 224, 218, 0.45);
  width: 30vw;
  height: 70vh;
  border-radius: 5px;
  padding: 60px;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(93, 166, 173, 0.7);
  border-radius: 5px;

  h1 {
    color: #fff;
    margin: 150px 0 20px 0;
    font-size: 30px;
    font-weight: normal;
  }
`

export default function Contato() {
  return (
    <div>
      <Header />
      <Titulo>
        <h2>Contato</h2>
        <hr />
      </Titulo>
      <ContatoContainer>
        <img
          src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/mauricioContato.jpeg"
          alt="mauricio"
        />
        <FormContainer>
          <Form>
            <h1>Entre em contato</h1>
            <div className="input-field">
              <input type="text" name="nome" required />
              <label>Nome</label>
            </div>
            <div className="input-field">
              <input name="email" type="email" required />
              <label>E-mail</label>
            </div>
            <div className="input-field">
              <textarea
                name="mensagem"
                type="text"
                required
                rows="10"
                cols="55"
              />
              <label>Deixe sua mensagem</label>
            </div>
            <div className="login-button">
              <div className="inner"></div>
              <button>Enviar</button>
            </div>
          </Form>
        </FormContainer>
      </ContatoContainer>
      <Footer />
    </div>
  )
}
