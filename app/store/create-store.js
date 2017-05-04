import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = (history) => {
  const middleware = routerMiddleware(history);
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, middleware)));
};

export default store;