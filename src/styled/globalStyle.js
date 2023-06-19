import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url('https://pixabay.com/get/g9e985e0db1b946235ec998d3996cbc8dd3c81695ac8d7b36fb0869b89fd0ccd460d0531a229463eff8e66e13faa5a0c484815b5ec50ff03fe31658ffe0853399_1280.jpg') 0 0 / cover no-repeat;
  background-attachment: fixed;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
}
`;
