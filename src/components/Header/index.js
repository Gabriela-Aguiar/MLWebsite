import React from "react"

import { Link } from "gatsby"
import { BrowserRouter as Router } from "react-router-dom"
import { HeaderStyle, Navbar } from "./style"

const Header = () => {
  return (
    <div>
      <HeaderStyle>
        {/* <img src="/mauricio-logo.png" className='logo'/> */}
        <Navbar>
          <Router>
            <Link to="/">Página Inicial</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/curriculo">Currículo</Link>
            <a href="https://mauriciolambiasi.blogspot.com/" target="_blank">
              Blog
            </a>
            <Link to="/contato">Contato</Link>
          </Router>
        </Navbar>
      </HeaderStyle>
    </div>
  )
}

export default Header
