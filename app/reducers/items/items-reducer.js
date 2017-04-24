import { Map } from 'immutable';
import createReducer from '../create-reducer';
import { SEARCH_FOR_ITEMS_REQUEST, SEARCH_FOR_ITEMS_SUCCESS, SEARCH_FOR_ITEMS_FAILURE } from '../../actions/action-constants';

const defaultStore = {
  isLoading: false,
  list: []
};

const items = createReducer(Map(defaultStore), {
  [SEARCH_FOR_ITEMS_REQUEST](state, action) { // eslint-disable-line no-unused-vars
    return state.merge({
      isLoading: true
    });
  },
  [SEARCH_FOR_ITEMS_SUCCESS](state, action) {
    return state.merge({
      isLoading: false,
      list: action.items
    });
  },
  [SEARCH_FOR_ITEMS_FAILURE](state, action) { // eslint-disable-line no-unused-vars
    return state.merge({
      isLoading: false,
      list: []
    });
  }
});

export default items;