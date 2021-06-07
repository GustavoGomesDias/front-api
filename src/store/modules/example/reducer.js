import * as types from '../types';

const initailState = {
  botaoClicado: false,
};

// Escuta as ações disparadas e, dependendo da ação, executa outra.
export default function reducer(state = initailState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Fazendo request');
      return state;
    }

    default: {
      return state;
    }
  }
}
