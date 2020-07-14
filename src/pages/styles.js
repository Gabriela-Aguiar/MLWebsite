import styled from 'styled-components';

export const Titulo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
    font-size: 45px;
    font-weight: normal;
    margin: 70px 0;
    }

    p {
        font-size: 27px;
        margin: 20px 0;
    }
`

export const Principal = styled.div `
    width: 100vw;
    display: flex;
    justify-content: space-around;
    margin-top: 150px;

    img {
        width:350px;
        border-radius: 5px;
    }

    p {
        width: 35vw;
        font-size: 26px;
        line-height: 1.6;
    }
`
export const Serviços = styled.div `
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    margin-bottom: 50px;

    h1 {
        font-size: 40px;
        font-weight: normal;
    }

    hr {
    width: 10%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(93, 166, 173, 0.75), rgba(0, 0, 0, 0));
    }
`
export const Fileira= styled.div `
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 100px 0;

    img {
        width: 80px;
    }
`
export const Paises= styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    img {
        width: 50px;
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
    }

    &:hover {
        box-shadow: 0 0 1em #5DA6AD;
        transform: scale(1.1)
    }
`

