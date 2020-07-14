import React from "react"
import {
  Principal,
  Serviços,
  Fileira,
  Paises,
  Card,
  Footer,
  Contato,
  Social,
  Titulo,
} from "./styles"
import "./style.css"
import Header from "../components/Header"


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
          “Conhece-te a ti mesmo e conhecerás todo o universo e os deuses,
          porque se o que procuras não achares primeiro dentro de ti mesmo, não
          acharás em lugar algum”
          <br />
          <br />
          Grécia Antiga
        </p>
        <img src="/images/mauricioPrincipal.jpeg" alt="mauricio" />
      </Principal>
      <Serviços>
        <h1>Serviços</h1>
        <hr />
        <Fileira>
          <Card>
            <img src="/images/cv.png" alt="Carreira" />
            <h3>Mudança de Vida e Carreira</h3>
          </Card>
          <Card>
            <img src="/images/teamwork.png" alt="Organização" />
            <h3>Cultura e Clima Organizacionais</h3>
          </Card>
          <Card>
            <img src="/images/humanity.png" alt="Internacionalização" />
            <h3>Internacionalização de Executivos</h3>
          </Card>
        </Fileira>
        <Fileira>
          <Card>
            <img src="/images/strategy.png" alt="Coaching" />
            <h3>
              Liderança, Gestão com Equipe, Mediação de Conflitos, RH
              Estratégico, Coaching
            </h3>
          </Card>
          <Card>
            <Paises>
              <img src="/images/mexico.jpeg" alt="México" />
              <img src="/images/brazil.png" alt="Brasil" />
              <h3>
                Relações Comerciais, Profissionais e Culturais entre México e
                Brasil
              </h3>
            </Paises>
          </Card>
        </Fileira>
      </Serviços>
      <Footer>
        <Contato>
          <h3>Contato</h3>
          <p>MauricioLambiasieducacao@hotmail.com</p>
          <p>www.educacaocorporativaedevida.com.br</p>
        </Contato>
        <Social>
          <a
            href="https://www.linkedin.com/in/mauricio-lambiasi/"
            target="_blank"
          >
            <img src="/images/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://www.facebook.com/mauricio.lambiasi" target="_blank">
            <img src="/images/facebook.png" alt="facebook" />
          </a>
          <a href="https://twitter.com/LambiasiM" target="_blank">
            <img src="/images/twitter.png" alt="twitter" />
          </a>
          <a href="https://www.instagram.com/mauriciolambiasi/">
            <img src="/images/instagram.png" alt="instagram" />
          </a>
        </Social>
      </Footer>
    </div>
  )
}
