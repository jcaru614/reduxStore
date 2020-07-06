import cartItemsReducer from './reducer';
import { createStore } from 'redux';

const store = createStore(cartItemsReducer)

export default store;