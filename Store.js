import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStoreHook } from 'react-redux';


import thunk from "redux-thunk";
import Reducer from "./Reducer";
const middleWare=[thunk]
const store= createStoreHook(
    Reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)
export default store