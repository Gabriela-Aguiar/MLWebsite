import styled from 'styled-components';

export const ServicosContainer = styled.div `
    display:flex;
    width: 100vw;
    justify-content: space-around;
`

export const List = styled.div `
    display:flex;
    flex-direction: column;
    margin: 70px 0;

    li {
        font-size: 19px;
        margin: 30px 0;
    }

    a:hover {
        color: #5DA6AD;
        cursor: pointer;
    }
`