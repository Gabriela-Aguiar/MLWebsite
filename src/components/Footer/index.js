import React from 'react'

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
        </FooterStyle>
    )
}