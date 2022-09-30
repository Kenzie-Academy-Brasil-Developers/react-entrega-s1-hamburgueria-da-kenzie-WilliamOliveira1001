import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    :root{
        --color1:#27AE60
        --color2:#EB5757
        --color3:#E0E0E0
        --color4:#fff
        --color5:#333333
        --color6:#828282
        --color7:#000
    }
    button{
        cursor: pointer;
        border: 0;
        background-color: transparent;
    }
    ul,li,ol{
        list-style: none;
    }
    section, div, aside{
        display: flex;
        flex-direction: column;
        justify-content:  flex-start;
        align-items: flex-start;
    }

`;
