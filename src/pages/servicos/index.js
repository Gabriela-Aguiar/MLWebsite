import React from 'react'

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { Titulo } from "../styles"

export default function index() {
    return (
        <div>
            <Header/>
            <Titulo>
                <h2>Serviços</h2>
                <hr/>
            </Titulo>
            <Footer/>
        </div>
    )
}
