import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    font-family: "Poppins", sans-serif;
    background-color: #f1f2f6;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 600;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none !important;
  }

  button:focus, input:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  .card {
    border-radius: 0.7rem;
  }

  .btn {
    border-radius: 0.45rem;
  }

`;

export default GlobalStyles;
