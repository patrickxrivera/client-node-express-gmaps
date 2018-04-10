import axios from 'axios';

export const fetchPlace = (search) => async (dispatch) => {
  const endpoint = 'http://127.0.0.1:8080/api/place';
  const res = await axios.get(endpoint, {
    params: {
      search
    }
  });

  dispatch({ type: 'UPDATE_PLACE_DATA', payload: res.data });
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

  const payload = res ? res.data : 'Error';

  dispatch({ type: 'UPDATE_PLACE_DATA', payload });
};
