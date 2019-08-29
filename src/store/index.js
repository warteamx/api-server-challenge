import {
  createStore
} from "redux";
import reducer from "../reducers";

// const initialState = {
//   wishlists: {
//     1: {
//       id: 1,
//       name: 'wedding',
//       products: [],
//     },
//     2: {
//       id: 2,
//       name: 'birthday',
//       products: [],
//     }

//   },
//   users: {
//     type: 'anonymous',
//     ga: 'xxxluzt-000'
//   }
// }

const initialState = {
    1: {
      id: 1,
      name: 'wedding',
      products: [],
    },
    2: {
      id: 2,
      name: 'birthday',
      products: [],
    }
  }

export const store = createStore(reducer, initialState);