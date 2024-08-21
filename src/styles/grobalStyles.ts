import { css } from "@emotion/react";
import { theme } from "./theme";

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1.4;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    font-size: ${theme.fontSizes.md};
  }
  p {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  a {
    color: ${theme.colors.black};
    line-height: 1.4;
    width: fit-content;
  }
  li {
    list-style: none;
  }
`;

export default globalStyles;
