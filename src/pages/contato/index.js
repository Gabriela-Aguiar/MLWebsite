import React from 'react'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Titulo } from "../styles"
import { ContatoContainer, FormContainer, Form } from "./style"

export default function Contato() {
    return (
        <div>
            <Header/>
            <Titulo>
                <h2>Contato</h2>
                <hr/>
            </Titulo>
            <ContatoContainer>
                <img src="/images/mauricioContato.jpeg" alt="mauricio" />
                <FormContainer>
                    <Form>
                        <h1>Entre em contato</h1>
                        <div className="input-field">
                            <input type="text" name="nome" required/>
                            <label>Nome</label>
                        </div>
                        <div className="input-field">
                            <input name="email" type="email" required/>
                            <label>E-mail</label>
                        </div>
                        <div className="input-field">
                            <textarea name="mensagem" type="text" required rows="10" cols="55"/>
                            <label>Deixe sua mensagem</label>
                        </div>
                        <div className="login-button">
                        <div className="inner">
                        </div>
                            <button>Enviar</button>
                        </div>
                    </Form>
                </FormContainer>
            </ContatoContainer>
            <Footer/>
        </div>
    )
}
