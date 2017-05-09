import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import items from '../items/items-reducer';

const reducers = combineReducers({
  items,
  router: routerReducer
});

export default reducers;