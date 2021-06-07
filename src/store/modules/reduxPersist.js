import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const presistedReducers = persistReducer(
    {
      key: 'REACT-BASE',
      storage,
      whitelist: ['example'],
    },
    reducers
  );

  return presistedReducers;
};
