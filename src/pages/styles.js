import styled from 'styled-components';

export const Header = styled.div `
    width:100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    h1 {
        font-size: 60px;
        font-weight: normal;
        color: #5DA6AD;
        margin-bottom: 50px;
    }

    h2 {
        font-size: 40px;
        font-weight: normal;
        margin: 70px 0;
    }

    p {
        font-size: 22px;
        margin: 20px 0;
    }

    hr {
    width: 30%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(93, 166, 173, 0.75), rgba(0, 0, 0, 0));
    }
`

export const Navbar = styled.div `
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 100px 0;

    a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    }

    a:hover {
        transform: scale(1.1);
        /* border-bottom: 1px solid #5DA6AD; */
        box-shadow: 0 4px 2px -2px #5DA6AD;
    }

    hr {
        width: 5%;
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

export const Footer= styled.div `
    background-color:#CAE0DA;
    display: flex;
    justify-content: space-between;
    width: 100vw;
`
export const Contato= styled.div `
    display: flex;
    flex-direction: column;
    margin: 30px;

    h3 {
        font-size: 24px;
    }
    
    p {
        margin: 10px 0;
    }
`

export const Social= styled.div `
    display: flex;
    margin: 90px 50px 0 0;

    img {
        width: 30px;
        height: 30px;
        margin: 0 15px;
    }
`

