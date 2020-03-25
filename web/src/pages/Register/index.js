import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Content, Button, Section, Form } from './styles';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUF] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('/ongs', data);

      alert(`Seu ID de acesso ${response.data.id}`);
      history.push('/');
    }catch(err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <Container className="register-container">
      <Content className="content">
        <Section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma
            e ajude pessoas a encontrarem os casos da sua ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </Section>

        <Form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da ONG"
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
            type="email"
          />
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="Whatsapp"
          />

          <div>
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <input
              value={uf}
              onChange={e => setUF(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>

          <Button type="submit">
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
