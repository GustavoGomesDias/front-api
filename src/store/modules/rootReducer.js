import { combineReducers } from 'redux';

import exampleReucer from './example/reducer';

// combina os reducer
export default combineReducers({
  example: exampleReucer,
});
