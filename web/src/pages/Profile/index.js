import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import { Container, Button, IncidentList, Loading } from './styles';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setisEmpty] = useState(false);
  
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
      setLoading(false);
      if (incidents === null || incidents.length === 0) {
        setisEmpty(true);
      } else {
        setisEmpty(false);
      }
    })
  }, [incidents, ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    }catch (err) {
      alert('Erro ao deletar caso, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }
  
  if(loading) {
    return (
      <Loading>
        <FaSpinner color="#E02041" size={20}/>
        <h1>Carregando</h1>
      </Loading >
    );
  }

  return (
    <Container className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, {ongName}</span>
        <Link to="/incidents/new">
          <Button>
            Cadastrar novo caso
          </Button>
        </Link>
        <div>
          <button type="button" onClick={handleLogout}>
            <FiPower size={18} color="#E02041" />
          </button>
        </div>
      </header>

      <h1>Casos Cadastrados</h1>

      <IncidentList >
        { isEmpty ? 
        (<h1>Não há casos cadastrados :(</h1>)
        :
        (
          incidents.map(incident => (
            <li Key={incident.id}>
              <strong>CASO</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>{Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL' 
              }).format(incident.value)
              }</p>
              <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                <FiTrash2 size={20} color="#A8A8B3" />
              </button> 
            </li>
          ))
        )
      }
      </IncidentList>
    </Container>
  );
}
