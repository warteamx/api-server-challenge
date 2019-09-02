import _wishlist from './wishlist.json'

const TIMEOUT = 100

export default {
  getWishlist: (cb, timeout) => setTimeout(() => cb(_wishlist), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}