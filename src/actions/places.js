import axios from 'axios';

export const fetchPlace = () => async (dispatch) => {
  const endpoint = 'http://127.0.0.1:8080/api/place';
  const res = await axios.get(endpoint);
  dispatch({ type: 'FETCH_PLACE', payload: res.data });
};

export const fetchPlaces = () => async (dispatch) => {
  const endpoint = 'http://127.0.0.1:8080/api/places';
  const res = await axios.get(endpoint);
  dispatch({ type: 'FETCH_PLACE', payload: res.data });
};
