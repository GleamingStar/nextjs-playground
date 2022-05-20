import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${reset};
* {
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
}
li {
  display: block;
  text-align: left;
}
ul {
  padding: 0;
  margin: 0;
}
input {
  outline: none;
}
html, body, #__next {
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyle;
