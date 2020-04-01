import styled from 'styled-components/native';

export const Container = styled.View`
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

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: ${props => props.theme.colors.inputText};
  font-family: Roboto;
  font-weight: 500;
`;
export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const IncidentList = styled.View`
  margin-top: 32px;
`;
export const Incident = styled.View`
  border-radius: 8px;
  background-color: ${props => props.theme.colors.incidentColor};
  margin-bottom: 10px;
`;
export const IncidentContext = styled.View`
  padding: 24px;
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

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e02041;
  flex: 1;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 55px;
  padding: 24px;
`;
export const DetailsButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const FlatListIncidents = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;
