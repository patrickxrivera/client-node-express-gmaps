import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    UPDATE_PLACE_DATA: (state, action) => {
      return action.payload;
    }
  },
  initialState
);
