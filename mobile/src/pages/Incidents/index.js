import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Header,
  LogoImg,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentList,
  Incident,
  IncidentProperty,
  DetailsButton,
  DetailsButtonText,
  IncidentValue,
  FlatListIncidents,
  IncidentContext,
} from './styles';
import api from '../../services/api';
import Logo from '../../assets/logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate('Detail', {incident});
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents');

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <LogoImg source={Logo} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem vindo(a)!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia!</Description>

      <FlatListIncidents
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        // onEndReached={loadIncidents}
        // onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <IncidentList>
            <Incident>
              <IncidentContext>
                <IncidentProperty>ONG:</IncidentProperty>
                <IncidentValue>{incident.name}</IncidentValue>

                <IncidentProperty>CASO:</IncidentProperty>
                <IncidentValue>{incident.title}</IncidentValue>

                <IncidentProperty>VALOR:</IncidentProperty>
                <IncidentValue>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(incident.value)}
                </IncidentValue>
              </IncidentContext>

              <DetailsButton onPress={() => navigateToDetail(incident)}>
                <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
                <Icon name="arrow-forward" size={16} color="#FFF" />
              </DetailsButton>
            </Incident>
          </IncidentList>
        )}
      />
    </Container>
  );
}
