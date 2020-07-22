import React from "react"
import {
  Principal,
  Serviços,
  Fileira,
  Paises,
  Card,
  Titulo,
} from "./styles"
import "./style.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Link } from "gatsby"


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
        <p><em>
          “Conhece-te a ti mesmo e conhecerás todo o universo e os deuses,
          porque se o que procuras não achares primeiro dentro de ti mesmo, não
          acharás em lugar algum”</em>
          <br />
          <br />
          Grécia Antiga
        </p>
        <img src="/images/mauricioPrincipal.jpeg" alt="mauricio" />
      </Principal>
      <Serviços>
        <h1>Serviços</h1>
        <hr/>
        <Fileira>
          <Card>
            <img src="/images/cv.png" alt="Carreira" />
            <h3>Mudança de Vida e Carreira</h3>
            <Link to="/servicos">Saiba mais</Link>
          </Card>
          <Card>
            <img src="/images/teamwork.png" alt="Organização" />
            <h3>Cultura e Clima Organizacionais</h3>
            <Link to="/servicos">Saiba mais</Link>
          </Card>
          <Card>
            <img src="/images/humanity.png" alt="Internacionalização" />
            <h3>Internacionalização de Executivos</h3>
            <Link to="/servicos">Saiba mais</Link>
          </Card>
        </Fileira>
        <Fileira>
          <Card>
            <img src="/images/strategy.png" alt="Coaching" />
            <h3>
              Liderança, Gestão com Equipe, Mediação de Conflitos, RH
              Estratégico, Coaching
            </h3>
            <Link to="/servicos">Saiba mais</Link>
          </Card>
          <Card>
            <Paises>
              <img src="/images/mexico.png" alt="México" />
              <img src="/images/brazil.png" alt="Brasil" />
              <h3>
                Relações Comerciais, Profissionais e Culturais entre México e
                Brasil
              </h3>
              <Link to="/servicos">Saiba mais</Link>
            </Paises>
          </Card>
        </Fileira>
      </Serviços>
      <Footer/>
    </div>
  )
}
