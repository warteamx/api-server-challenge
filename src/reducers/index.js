const initialState = {
  wishlist: [{
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
};


export default (state= initialState , action) => {
    switch (action.type) {

      // case "GET_WISHLIST":
      //   return {
      //       ...state, 
      //   }

      //   case "RECEIVE_WISHLIST":
      //     return {
      //         ...state, 
      //         wishlist: state.wishlist
      //     }

      case "POST_WISH":
        return {
            ...state, 
            wishlist: state.wishlist.concat(action.payload)
        };

        // case "PATCH_WISHLIST":
        //   return {
        //       ...state, 
        //       id: action.payload
        //   }
  
      default:
        return state;
    }
  };