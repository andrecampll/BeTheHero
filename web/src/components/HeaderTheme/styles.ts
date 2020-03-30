import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  padding-top: 10px;
`;
