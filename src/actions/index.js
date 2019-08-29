import * as types from '../constants/ActionTypes'

export const postWish = text => ({ type: types.POST_WISH, text });
export const patchWish = text => ({ type: types.PATCH_WISH, text });

