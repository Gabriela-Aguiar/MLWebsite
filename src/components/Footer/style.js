import styled from 'styled-components';

export const FooterStyle= styled.div `
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