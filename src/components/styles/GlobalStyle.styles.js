import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        font-size: 40px;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        background: rgb(0,0,94);
        background: linear-gradient(90deg, rgba(0,0,94,1) 0%, rgba(0,0,27,1) 100%), url(./images/background.jpg);
        margin: 0;
        color: white;
        font-size: 36px;
    }
    
`