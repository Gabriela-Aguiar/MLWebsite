import React from "react"
import { Link, BrowserRouter as Router } from "react-router-dom"
import { Header, Navbar, Principal, Serviços, Fileira, Paises, Card, Footer, Contato, Social} from './styles'
import './style.css'

export default function Home() {
  return (
  <div>
    <Header>
      <h1>Mauricio Lambiasi</h1>
      <hr/>
      <Navbar>
        <Router>
          <Link to ="/">Página Inicial</Link>
          <Link to ="/sobre">Sobre</Link>
          <Link to ="/servicos">Serviços</Link>
          <Link to ="/blog">Blog</Link>
          <Link to ="/contato">Contato</Link>
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
      <img src='/images/mauricioPrincipal.jpeg' alt="mauricio"/>
    </Principal>
    <Serviços>
      <h1>Serviços</h1>
      <hr/>
      <Fileira>
        <Card>
          <img src ='/images/cv.png' alt="Carreira"/>
          <h3>Mudança de Vida e Carreira</h3>
        </Card>
        <Card>
          <img src ='/images/collaborative.png' alt="Organização"/>
          <h3>Cultura e Clima Organizacionais</h3>
        </Card>
        <Card>
          <img src ='/images/humanity.png' alt="Internacionalização"/>
          <h3>Internacionalização de Executivos</h3>
        </Card>
      </Fileira>
      <Fileira>
        <Card>
          <img src ='/images/strategy.png' alt="Coaching"/>
          <h3>Liderança, Gestão com Equipe, 
              Mediação de Conflitos, 
              RH Estratégico, Coaching</h3>
        </Card>
        <Card>
          <Paises>
            <img src ='/images/mexico.png' alt="México"/>
            <img src ='/images/brazil.png' alt="Brasil"/>
            <h3>Relações Comerciais, 
            Profissionais e 
          Culturais entre México e Brasil</h3>
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
        <Router>
          <a href="https://www.linkedin.com/in/mauricio-lambiasi/" alt="linkedin" target="_blank"><img src='/images/linkedin.png'/></a>
          <a href="https://www.facebook.com/mauricio.lambiasi" alt="facebook" target="_blank"><img src='/images/facebook.png'/></a>
          <a href="https://twitter.com/LambiasiM" alt="twitter" target="_blank"><img src='/images/twitter.png'/></a>
          <a href="https://www.instagram.com/mauriciolambiasi/" alt="instagram" target="_blank"><img src='/images/instagram.png'/></a>
        </Router>
      </Social>
    </Footer>
  </div>
  )
}
