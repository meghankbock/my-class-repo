// Create and export the Redux store
import { createStore } from 'redux';
import reducer from './reducers';

export default createStore(reducer);
