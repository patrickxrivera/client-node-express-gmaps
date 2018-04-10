import axios from 'axios';

export const fetchPlace = (search) => async (dispatch) => {
  const endpoint = 'http://127.0.0.1:8080/api/place';
  const res = await axios.get(endpoint, {
    params: {
      search
    }
  });

  dispatch({ type: 'FETCH_PLACE', payload: res.data });
};

export const fetchPlaces = (search) => async (dispatch) => {
  const endpoint = 'http://127.0.0.1:8080/api/places';
  const res = await axios
    .get(endpoint, {
      params: {
        search
      }
    })
    .catch((err) => {
      console.log(err);
    });

  const dispatchObj = res
    ? { type: 'FETCH_PLACES', payload: res.data }
    : { type: 'FETCH_PLACE_ERROR', payload: 'Error' };

  dispatch(dispatchObj);
};
