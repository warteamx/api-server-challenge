import * as types from '../constants/ActionTypes'
const axios = require('axios')


const fetchID = async () => {
  try {
    return await axios.get('http://localhost:3004/idList')
  } catch (error) {
    console.error(error)
  }
}
const lastID = async () => {
  const IdList = await fetchID()
  return IdList.data.length +1 
}

export function fetchPostWish(name, negId, id) {
  return dispatch => {
    dispatch(postWish(name, negId, id));
    return lastID()
      .then( (name, negId, id)  => {
        dispatch(postWishSuccess(name,  negId, id));
        return id;
      })
      .catch(error =>
        dispatch(postWishFailure(error))
      );
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

let previousId = 0;
export const postWish = (name, negId ,id) => {
   negId = previousId - 1;
  const action = ({ type: types.POST_WISH, payload: { negId, name, id} });
  previousId = negId;
  return action
}

export const postWishSuccess = (name,negId,id) => ({
  type: types.POST_WISH_SUCCESS,
  payload: {name,negId,id}
});

export const postWishFailure = (error) => ({
  type: types.POST_WISH_FAILURE,
  payload: {error}
});


