import React from "react"
import { Link } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Navbar, Principal, Serviços, Fileira, Paises } from './styles'

export default function Home() {
  return (
  <div>
    <Header>
      <h1>Mauricio Lambiasi</h1>
      <hr/>
      <Navbar>
        <Router>
          <Link to ="#">Página Inicial</Link>
          <Link to ="#">Sobre</Link>
          <Link to ="#">Serviços</Link>
          <Link to ="#">Blog</Link>
          <Link to ="#">Contato</Link>
        </Router>
      </Navbar>
      <h2>Desenvolvimento Humano & Negócios</h2>
      <p>Educação Corporativa & Orientação para a Vida</p>
      <p>Assessoria Corporativa</p>
    </Header>
    <Principal>
      <p>“Conhece-te a ti mesmo e conhecerás todo o
      universo e os deuses, porque se o que procuras
      não achares primeiro dentro de ti mesmo, não
      acharás em lugar algum”
      <br/>
      <br/>
      Grécia Antiga</p>
      <img src='/images/mauricioPrincipal.jpeg'/>
    </Principal>
    <Serviços>
      <h1>Serviços</h1>
      <hr/>
      <Fileira>
        <img src ='/images/cv.png'/>
        <img src ='/images/collaborative.png'/>
        <img src ='/images/humanity.png'/>
      </Fileira>
      <Fileira>
        <img src ='/images/strategy.png'/>
        <Paises>
          <img src ='/images/mexico.png'/>
          <img src ='/images/brazil.png'/>
        </Paises>
      </Fileira>
    </Serviços>
  </div>
  )
}
