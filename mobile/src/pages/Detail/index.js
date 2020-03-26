import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity, Linking} from 'react-native';
import Logo from '../../assets/logo.png';

import {
  Container,
  Header,
  LogoImg,
  Incident,
  IncidentProperty,
  IncidentValue,
  Action,
  ContactBox,
  AngelTitle,
  AngelDescription,
  Actions,
  ActionText,
} from './styles';
import * as MailComposer from 'expo-mail-composer';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`,
    );
  }

  return (
    <Container>
      <Header>
        <LogoImg source={Logo} />

        <TouchableOpacity onPress={navigateBack}>
          <Icon name="arrow-back" size={16} color="#E02041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <IncidentProperty>ONG:</IncidentProperty>
        <IncidentValue>
          {incident.name} de {incident.city}/{incident.uf}{' '}
        </IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </IncidentValue>
      </Incident>

      <ContactBox>
        <AngelTitle>Salve o dia!</AngelTitle>
        <AngelTitle>Seja o herói desse caso.</AngelTitle>

        <AngelDescription>Entre em contato:</AngelDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>Whatsapp</ActionText>
          </Action>
          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
