import React from "react"
import styled from "styled-components"

import "./style.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

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

const Principal = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  margin-top: 200px;
  color: #fff;

  img {
    width: 400px;
    border-radius: 5px;
  }

  p {
    width: 40vw;
    font-size: 25px;
    line-height: 1.6;
    text-align: justify;
  }
`
export const Serviços = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 60px;
  color: #fff;

  h1 {
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 10px;
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
    margin-bottom: 50px;
  }
`

const Fileira = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 80px 0;

  img {
    width: 100px;
  }
`

const Paises = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img {
    width: 70px;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  text-align: center;

  h3 {
    margin-top: 25px;
    font-size: 20px;
    font-weight: normal;
  }

  a {
    margin-top: 20px;
    color: #5da6ad;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 10px;
    visibility: hidden;
    text-decoration: underline;
  }

  &:hover {
    transform: translateY(-33px);
    transition: 0.5s;
  }

  &:hover a {
    visibility: visible;
    cursor: pointer;
    transition-delay: 0.5s;
  }
`

export default function Home() {
  return (
    <div>
      <Header />
      <Titulo>
        <h2>Desenvolvimento Humano & Negócios</h2>
        <p>Educação Corporativa & Orientação para a Vida</p>
        <p>Assessoria Corporativa</p>
      </Titulo>
      <Principal>
        <p>
          <em>
            “Conhece-te a ti mesmo e conhecerás todo o universo e os deuses,
            porque se o que procuras não achares primeiro dentro de ti mesmo,
            não acharás em lugar algum”
          </em>
          <br />
          <br />
          Grécia Antiga
        </p>
        <img
          src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/mauricioPrincipal.jpeg"
          alt="mauricio"
        />
      </Principal>
      <Serviços>
        <h1>Serviços</h1>
        <hr />
        <Fileira>
          <Card>
            <img
              src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/cv.png"
              alt="Carreira"
            />
            <h3>Mudança de Vida e Carreira</h3>
            <Link to="/servicos">Saiba mais</Link>
          </Card>
          <Card>
            <img
              src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/teamwork.png"
              alt="Organização"
            />
            <h3>Cultura e Clima Organizacionais</h3>
            <Link to="/servicos">Saiba mais</Link>
          </Card>
          <Card>
            <img
              src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/humanity.png"
              alt="Internacionalização"
            />
            <h3>Internacionalização de Executivos</h3>
            <Link to="/servicos">Saiba mais</Link>
          </Card>
        </Fileira>
        <Fileira>
          <Card>
            <img
              src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/strategy.png"
              alt="Coaching"
            />
            <h3>
              Liderança, Gestão com Equipe, Mediação de Conflitos, RH
              Estratégico, Coaching
            </h3>
            <Link to="/servicos">Saiba mais</Link>
          </Card>
          <Card>
            <Paises>
              <img
                src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/mexico.png"
                alt="México"
              />
              <img
                src="https://mauricio-lambiasi.s3-sa-east-1.amazonaws.com/brazil.png"
                alt="Brasil"
              />
              <h3>
                Relações Comerciais, Profissionais e Culturais entre México e
                Brasil
              </h3>
              <Link to="/servicos">Saiba mais</Link>
            </Paises>
          </Card>
        </Fileira>
      </Serviços>
      <Footer />
    </div>
  )
}
