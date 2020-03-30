import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #000;
    border: 1px solid #DCDCE6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    min-height: 140px;
    color: #000;
    border: 1px solid #DCDCE6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414D;
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    transition: opacity 0.2s;

    svg {
      margin-right: 8px;
    }
  }
`;