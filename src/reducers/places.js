import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    FETCH_PLACE: (state, action) => {
      console.log(action.payload);
      return state;
    },
    FETCH_PLACES: (state, action) => {
      console.log(action.payload);
      return state;
    }
  },
  initialState
);
