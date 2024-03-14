import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#e50914",
};

export const GlobalStyled = createGlobalStyle`

    ${reset}

    *{
        box-sizing:border-box;
    }

    body{
        font-family: "Noto Sans KR", sans-serif;
        background-color: #1d1d1d;
        color: white;
        letter-spacing: -1px;
        //글자 사이 간격 줄이기 늘리기
    }

    a{
        text-decoration: none;
        color: white;
    }

`;
