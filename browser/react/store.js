import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/root-reducer';

const logger = applyMiddleware(loggerMiddleware);
const thunkPromise = applyMiddleware(thunkMiddleware)

export default createStore(reducer, logger, thunkPromise);