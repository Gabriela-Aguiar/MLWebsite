import styled from 'styled-components';

export const ServicosTitle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: normal;
        text-align: center;
        margin-bottom: 100px;
        width: 80vw;
        text-align: center;
        line-height: 1.6;
    }
`

export const ServicosQuote = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 80px;

    p {
        width: 30vw;
        font-size: 23px;
        line-height: 1.6;
        text-align: justify;
    }
`

export const ServicosDescription = styled.div `
    padding: 50px;
    margin: 50px 0;

    p {
        font-size: 25px;
        line-height: 1.6;
        text-align: justify;
        margin-bottom: 50px;
    }

    span {
        line-height: 1.6;
    }
`