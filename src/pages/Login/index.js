import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small>Oie</small>
      </Title>
      <p>Lorem ipsum dolor sit amet.</p>
      <button type="button">Enviar</button>
    </Container>
  );
}
