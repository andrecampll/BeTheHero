import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      margin-left: 24px;
      font-weight: bold;
      color: ${props => props.theme.colors.spanText};
    }

    img {
      height: 64px;
    }

    a {
      width: 260px;
      margin-left: auto;
      margin-top: 0;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    div > button {
      height: 60px;
      width: 60px;
      border-radius: 4px;
      border: 1px solid ${props => props.theme.colors.input};
      background: ${props => props.theme.colors.content};
      margin-left: 16px;
      margin-top: 15px;
      transition: border-color 0.2s;

      &:hover {
        border-color: #999;
      }
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #E02041;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  color: #FFF;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.07, '#E02041')};
  }
`;

export const IncidentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: ${props => props.theme.colors.incidentColor};
    padding: 24px;
    border-radius: 8px;
    position: relative;

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: transparent;

      &:hover{
        opacity: 0.8;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: ${props => props.theme.colors.text};
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
      animation: ${rotate} 2s linear infinite;
      margin-right: 10px;
    }
`;
