import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import placesReducer from './places';

export default combineReducers({
  places: placesReducer,
  form: formReducer
});
