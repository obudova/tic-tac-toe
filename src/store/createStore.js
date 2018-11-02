import { createStore } from 'redux';
import reducer from './reducerRegistry';

const store = createStore(reducer);

export default store;