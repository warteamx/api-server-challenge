const initialState = {
  wishlist: [{
    id: 1,
    name: "wedding",
    products: []
  },
  {
    id: 2,
    name: "birthday",
    products: []
  }
  ],
  idList: [1,2]
};


export default (state= initialState , action) => {
    switch (action.type) {
      case "POST_WISH":
        return {
            ...state, 
            wishlist: state.wishlist.concat(action.payload)
        };

        case "POST_WISH_SUCCESS":
          return state.wishlist.map((item, index) => {
            // Find the item with the matching id
            if(item.negId === action.payload.negId) {
              // Return a new object
              return {
                ...item,  // copy the existing item
                id: action.payload.id // replace the email addr
              }
            }
            // Leave every other item unchanged
            return item;
          });
  
      default:
        return state;
    }
  };