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