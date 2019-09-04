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
          return {
            ...state, 
            idList: state.idList.concat(action.payload.name)
        };
  
      default:
        return state;
    }
  };