import React from "react"

import { Link } from "gatsby"
import { BrowserRouter as Router } from "react-router-dom"
import { HeaderStyle, Navbar } from "./style"

const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <h1>Mauricio Lambiasi</h1>
        <hr />
        <Navbar>
          <Router>
            <Link to="/">Página Inicial</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/curriculo">Currículo</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contato">Contato</Link>
          </Router>
        </Navbar>
      </HeaderStyle>
    </div>
  )
}

export default Header
