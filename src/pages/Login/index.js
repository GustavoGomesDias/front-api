import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';
import axios from '../../services/axios';

export default function Login() {
  // Como o array tá vazio (ele guarda as variaveis que vão mudar de estado), significa que o useEffect vai ser usado apenas uma vez
  React.useEffect(() => {
    // Não pode usar async com useEffect, por isso criamos uma função
    async function getData() {
      const { data } = await axios.get('/alunos');
      console.log(data);
    }

    getData();
  }, []);

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
