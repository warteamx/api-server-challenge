export default (state, action) => {
    switch (action.type) {
      case "POST_WISH":
        return {
            ...state, 
            id: action.text,
            name: action.text
        }

        case "PATCH_WISHLIST":
          return {
              ...state, 
              id: action.text
          }
  
      default:
        return state;
    }
  };