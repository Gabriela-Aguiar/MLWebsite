import styled from 'styled-components';

export const CurriculoContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100vw;
    justify-content: center;
    align-items: center;

    p {
        text-align: center;
        width: 60vw;
        font-size: 22px;
        line-height: 1.6;
        text-align: justify;
    }
`

export const Fotos = styled.div `
    width: 100vw;
    display:flex;
    justify-content: space-around;
    margin: 70px 0;

    img {
        width: 400px;
    }
`