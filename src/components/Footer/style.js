import styled from 'styled-components';

export const FooterStyle= styled.div `
    display: flex;
    justify-content: space-between;
    width: 100vw;
    border-top: 2px solid #8DA3C2;
    color: #fff;
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
    justify-content: space-around;
    align-items: flex-end;
    width: 30vw;
    margin-bottom: 30px;

    .icon {
        font-size: 30px;
        color: #000;
        color: #fff;
    }

    .icon:hover {
        color: #5DA6AD
    }
    
`