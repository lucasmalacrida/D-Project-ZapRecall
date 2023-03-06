import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #FB6B6B;
    }

    p {
        color: #333333;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }

    h1 {
        font-family: 'Righteous', cursive;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -1.2%;
        color: #FFFFFF;
        padding: 0px 20px;
    }
`

export default GlobalStyle;