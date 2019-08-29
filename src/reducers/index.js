export default (state, action) => {
    switch (action.type) {
      case "POST_WISH":
        return {
            ...state, 
            tech: action.text
        }

        case "PATCH_WISHLIST":
          return {
              ...state, 
              tech: action.text
          }
  
      default:
        return state;
    }
  };