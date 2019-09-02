import { createStore , applyMiddleware, compose} from "redux";
import reducer from "../reducers";


// let initialState = server.getWishlist((wish)=> wish);


// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer);