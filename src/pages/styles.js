import styled from 'styled-components';

export const Titulo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    h2 {
    font-size: 40px;
    font-weight: normal;
    margin: 20px 0 10px 0;
    }

    p {
        font-size: 25px;
        margin-top: 50px;
    }

    hr {
    width: 10%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(93, 166, 173, 0.75), rgba(0, 0, 0, 0));
    }
`

export const Principal = styled.div `
    width: 100vw;
    display: flex;
    justify-content: space-around;
    margin-top: 200px;
    color: #fff;

    img {
        width:400px;
        border-radius: 5px;
    }

    p {
        width: 40vw;
        font-size: 25px;
        line-height: 1.6;
        text-align: justify;
    }
`
export const Serviços = styled.div `
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    margin-bottom: 60px;
    color: #fff;

    h1 {
        font-size: 40px;
        font-weight: normal;
        margin-bottom: 10px;
    }

    hr {
        width: 10%;
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(93, 166, 173, 0.75), rgba(0, 0, 0, 0));
        margin-bottom: 50px;
    }
`
export const Fileira= styled.div `
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 80px 0;

    img {
        width: 100px;
    }
`
export const Paises= styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    img {
        width: 70px;
     } 
`

export const Card= styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    text-align: center;

    h3 {
        margin-top: 25px;
        font-size: 20px;
        font-weight: normal;
    }

    a {
        margin-top: 20px;
        color: #5DA6AD;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 10px;
        visibility: hidden;
        text-decoration: underline;
    }

    &:hover {
        transform: translateY(-33px);
        transition: 0.5s;
    }

    &:hover a {
        visibility: visible;
        cursor: pointer;
        transition-delay: 0.5s;
    }
`

