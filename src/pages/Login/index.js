import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  // useDispatch dispara ações pro redux ouvir
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.buttonClickRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <p>Lorem ipsum dolor sit amet.</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
