import { css } from "@emotion/react";

const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
  }
  html {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  img {
    pointer-events: none;
  }
`;

export default globalStyles;