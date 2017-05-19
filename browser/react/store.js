import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import reducer from './reducers/root-reducer';

const logger = applyMiddleware(loggerMiddleware);

export default createStore(reducer, logger);