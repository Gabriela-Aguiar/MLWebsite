import styled from 'styled-components';

export const ContatoContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    margin-right: 350px;

    img {
        width: 500px;
        border-radius: 5px;
    }
`

export const FormContainer = styled.div `
    position: relative;
    top: -80px;
    right: -350px;
    background-color: rgb(202, 224, 218, 0.45);
    width: 30vw;
    height: 70vh;
    border-radius: 5px;
    padding: 60px;
`

export const Form = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: rgba(93, 166, 173, 0.7);
    border-radius: 5px;

    h1 {
        color: #fff;
        margin: 150px 0 20px 0;
        font-size: 30px;
        font-weight: normal;
    }
    
`

