import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


import {
    FooterStyle,
    Contato,
    Social,
  } from "./style"

export default function Footer() {
    return (
        <FooterStyle>
            <Contato>
                <h3>Contato</h3>
                <p>E-mail: mlambiasi@mauriciolambiasi.com</p>
                <p>Celular: +55 11 99999-8505</p>
            </Contato>
            <Social>
                <a href="https://www.linkedin.com/in/mauricio-lambiasi/"target="_blank">
                <FontAwesomeIcon icon={ faLinkedin} className="icon"/>
                </a>
                <a href="https://www.facebook.com/mauricio.lambiasi" target="_blank">
                <FontAwesomeIcon icon={ faFacebook } className="icon"/>
                </a>
                <a href="https://twitter.com/LambiasiM" target="_blank">
                <FontAwesomeIcon icon={ faTwitter } className="icon"/>
                </a>
                <a href="https://www.instagram.com/mauriciolambiasi/">
                <FontAwesomeIcon icon={ faInstagram } className="icon"/>
                </a>
            </Social>
        </FooterStyle>
    )
}
