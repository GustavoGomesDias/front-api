import { createStore } from 'redux';

const initailState = {
  botaoClicado: false,
};

// Escuta as ações disparadas e, dependendo da ação, executa outra.
const reducer = (state = initailState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
