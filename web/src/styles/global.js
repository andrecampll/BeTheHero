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

  h1 {
    color: ${props => props.theme.colors.text};
  }

  form input {
    width: 100%;
    height: 60px;
    color: ${props => props.theme.colors.inputText};
    border: 1px solid ${props => props.theme.colors.input};
    border-radius: 8px;
    padding: 0 24px;
    background: ${props => props.theme.colors.input};
  }

  form textarea {
    width: 100%;
    min-height: 140px;
    color: ${props => props.theme.colors.inputText};
    border: 1px solid ${props => props.theme.colors.input};
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;
    background: ${props => props.theme.colors.input};
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${props => props.theme.colors.text};
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    transition: opacity 0.2s;

    svg {
      margin-right: 8px;
    }
  }
`;