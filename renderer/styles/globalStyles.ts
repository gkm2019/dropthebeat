import { css } from "@emotion/react";

const globalStyles = css`
  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Pretendard-Regular.woff2") format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/Pretendard-Medium.woff2") format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-style: normal;
    src: url("/fonts/Pretendard-Bold.woff2") format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
    font-style: normal;
    src: url("/fonts/Pretendard-Black.woff2") format("woff2");
  }
  
  * {
    padding: 0;
    margin: 0;
    font-family: 'Pretendard';
    box-sizing: border-box;
  }
  html {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    min-width: 300px;
  }
  img {
    pointer-events: none;
  }
`;

export default globalStyles;
