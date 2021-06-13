import * as types from '../types';

const initailState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function reducer(state = initailState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return state;
    }

    default: {
      return state;
    }
  }
}
