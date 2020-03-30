import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  padding-top: 10px;

  h1, a {
    font-size: 10px;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
    margin-top: 0;
    margin-left: 2px;
  }

  a {
    color: ${props => props.theme.colors.incidentColor} !important;
  }
`;
