import * as types from '../constants/ActionTypes'
import server from '../api/server'


export const postWish = payload => 
({ type: types.POST_WISH, payload });
export const patchWish = payload =>
 ({ type: types.PATCH_WISH, payload});


 

export const receiveWishes = wishes => ({
    type: types.RECEIVE_WISHLIST,
    wishes
  })

export const getAllWishes = () => dispatch => {
    server.getWishlist (wishes => {
      dispatch(receiveWishes(wishes))
    })
  }

