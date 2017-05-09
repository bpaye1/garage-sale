import 'isomorphic-fetch';
import { SEARCH_FOR_ITEMS_REQUEST, SEARCH_FOR_ITEMS_SUCCESS } from '../action-constants';

export const searchForItems = () => (dispatch) => {
  dispatch({ type: SEARCH_FOR_ITEMS_REQUEST });

  return fetch('data/items.json')
    .then(response => response.json())
    .then((items) => {
      dispatch({ type: SEARCH_FOR_ITEMS_SUCCESS, items });
    });
};

export default searchForItems;