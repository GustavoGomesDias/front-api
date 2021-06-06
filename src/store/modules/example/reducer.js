const initailState = {
  botaoClicado: false,
};

// Escuta as ações disparadas e, dependendo da ação, executa outra.
export default function reducer(state = initailState, action) {
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
}
