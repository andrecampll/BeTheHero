import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 24px;
  padding-top: 20px;
  background-color: ${props => props.theme.colors.background};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const LogoImg = styled.Image``;
export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;
export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.incidentColor};
  margin-bottom: 16px;
  margin-top: 48px;
`;
export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.incidentColor};
  margin-bottom: 50px;
`;
export const AngelTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.colors.titleText};
  line-height: 30px;
`;
export const AngelDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;
export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
export const Action = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;
