import { createStore , applyMiddleware, compose} from "redux";
import rootReducer from "../reducers";
import thunk from 'redux-thunk';


// let initialState = server.getWishlist((wish)=> wish);


// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer, applyMiddleware(thunk));