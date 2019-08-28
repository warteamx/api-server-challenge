import { createStore } from "redux";
import reducer from "../reducers";

const initialState = [
    {
      id: 1,
      name: 'wedding',
      products: []
    }, {
      id: 2,
      name: 'birthday',
      products: []
    }
  ]
export const store = createStore(reducer, initialState);