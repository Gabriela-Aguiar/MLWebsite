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
                <p>MauricioLambiasieducacao@hotmail.com</p>
                <p>www.educacaocorporativaedevida.com.br</p>
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