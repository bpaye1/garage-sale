import { combineReducers } from 'redux';
import items from './items/items-reducer';

const reducers = combineReducers({
  items
});

export default reducers;