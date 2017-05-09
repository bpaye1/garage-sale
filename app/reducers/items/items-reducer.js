import { Map, List } from 'immutable';
import { map } from 'lodash';
import createReducer from '../create-reducer';
import ItemRecord from '../../records/item-record';
import { SEARCH_FOR_ITEMS_REQUEST, SEARCH_FOR_ITEMS_SUCCESS, SEARCH_FOR_ITEMS_FAILURE } from '../../actions/action-constants';

const defaultStore = {
  isLoading: false,
  list: List()
};

export default createReducer(Map(defaultStore), {
  [SEARCH_FOR_ITEMS_REQUEST](state, action) { // eslint-disable-line no-unused-vars
    return state.merge({
      isLoading: true
    });
  },
  [SEARCH_FOR_ITEMS_SUCCESS](state, action) {
    const items = map(action.items, item => new ItemRecord(item));
    return state.merge({
      isLoading: false,
      list: items
    });
  },
  [SEARCH_FOR_ITEMS_FAILURE](state, action) { // eslint-disable-line no-unused-vars
    return state.merge({
      isLoading: false,
      list: List()
    });
  }
});