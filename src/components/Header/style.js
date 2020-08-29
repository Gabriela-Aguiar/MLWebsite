import styled from 'styled-components';

export const HeaderStyle = styled.div`
width:100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.logo {
    width: 500px;
    top: 30px;
    margin-top: 50px;
}

h1 {
    font-size: 60px;
    font-weight: normal;
    color: #5DA6AD;
    margin-bottom: 40px;
}

hr {
width: 40%;
border: 0;
height: 1px;
background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(93, 166, 173, 0.75), rgba(0, 0, 0, 0));
}
`

export const Navbar = styled.div `
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 80px 0;
    background-color: #fff;
    box-shadow: 0 0 1em #2B405C;

    a {
    text-decoration: none;
    color: #000;
    font-size: 30px;
    }

    a:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 2px -2px #5DA6AD;
    }

    hr {
        width: 5%;
    }
`