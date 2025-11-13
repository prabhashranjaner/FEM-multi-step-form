import { createGlobalStyle, css } from "styled-components";
import { media } from "./style";

const GlobalStyles = createGlobalStyle`
    :root{
        --col-darkblue:hsl(213, 96%, 18%);
        --col-blue:hsl(243, 100%, 62%);
        --col-lightblue: hsl(228, 100%, 84%);
        --col-skyblue: hsl(206, 94%, 87%);
        --col-red:hsl(354, 84%, 57%);

        --col-gray-1:hsl(231, 100%, 99%);
        --col-gray-2:hsl(218, 100%, 97%);
        --col-gray-3:hsl(229, 24%, 87%);
        --col-gray-4: hsl(231, 11%, 63%);

        /* --bp-md: "1280px"; */
        --bp-md: "min-width:1280px"

    }

    *,*::after, *::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
        font-family: "Ubuntu", sans-serif;
        height: 100dvh;
        background-color: var(--col-gray-2);
             
        ${media.laptop(css`
          display: flex;
          align-items: center;
          justify-content: center;
        `)}
    }

`;

export default GlobalStyles;
