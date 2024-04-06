import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset}
* {
    margin: 0;
    padding: 0;
  }
`
export default globalStyles;