import { createStore, applyMiddleware,compose } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk'

// esta linea de abajo es para conectar a la extension del navegador => redux devtools

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose 

const store = createStore(
  reducer,
 composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea es para hacer peticiones a un server

);

export default store;