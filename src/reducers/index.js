let initialState = [{
  "id": 1,
  "name": "wedding",
  "products": []
},
{
  "id": 2,
  "name": "birthday",
  "products": []
}
]

export default (state= initialState , action) => {
    switch (action.type) {

      case "GET_WISHLIST":
        return {
            ...state, 
        }

        case "RECEIVE_WISHLIST":
          return {
              ...state, 
          }

      case "POST_WISH":
        return {
            ...state, 
            id: -1,
            name: action.payload
        }

        case "PATCH_WISHLIST":
          return {
              ...state, 
              id: action.payload
          }
  
      default:
        return state;
    }
  };