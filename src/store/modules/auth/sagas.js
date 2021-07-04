import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);

    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Você fez login.');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (err) {
    toast.error('Usuário ou senha inválidos.');
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        nome,
        email,
        password: password || undefined,
      });

      toast.success('Informações alteradas com sucesso.');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', {
        nome,
        email,
        password,
      });

      toast.success('Conta criada com sucesso.');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      history.push('/login');
    }
  } catch (err) {
    const errors = get(err, 'response.data.error', []);
    const status = get(err, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisará fazer login novamente.');

      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido.');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
