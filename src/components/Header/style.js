import styled from 'styled-components';

export const HeaderStyle = styled.div`
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