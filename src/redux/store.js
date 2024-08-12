import { legacy_createStore as createStore,applyMiddleware } from 'redux';
//import cakeReducer from "./cake/cakeReducer"; 
import rootReducer from './rootReducer';
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
//importing a default export

const store = createStore(rootReducer,
    composeWithDevTools(
    applyMiddleware(logger)))
export default store