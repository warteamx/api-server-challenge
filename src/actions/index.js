import * as types from '../constants/ActionTypes'
import server from '../api/server'


let previousId = 0;
export const postWish = (name) => {
   negId = previousId - 1;
  const action = ({ type: types.POST_WISH, payload: { negId, name} });
  previousId = negId;
  return action
}

export const postWishSuccess = (name, negId, id) => ({
  type: types.POST_WISH_SUCCESS, 
  name,
  id,
  negId
});

// export const postWishFailure = error => ({
//   type: types.POST_WISH_FAILURE,
//   payload: { error }
// });


