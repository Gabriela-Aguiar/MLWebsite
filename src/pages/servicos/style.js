import styled from 'styled-components';

export const ServicosContainer = styled.div `
    display:flex;
    width: 100vw;
    justify-content: space-around;
    color: #fff;
`

export const List = styled.div `
    display:flex;
    flex-direction: column;
    margin: 70px 0;

    li {
        font-size: 20px;
        margin: 30px 0;
    }

    a {
        color: #000;
        text-decoration: none;
        color: #fff;
    }

    a:hover {
        color: #5DA6AD;
        cursor: pointer;
    }
`