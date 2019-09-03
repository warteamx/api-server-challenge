import * as types from '../constants/ActionTypes'
import server from '../api/server'


let previousId = 0;
export const postWish = (name, negId) => {
   negId = previousId - 1;
  const action = ({ type: types.POST_WISH, payload: { negId, name} });
  previousId = negId;
  return action
}

export const postWishSuccess = (name) => ({
  type: types.POST_WISH_SUCCESS, 
});

export const postWishFailure = error => ({
  type: types.POST_WISH_FAILURE,
  payload: { error }
});


