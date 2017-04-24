import { SEARCH_FOR_ITEMS_REQUEST, SEARCH_FOR_ITEMS_SUCCESS, SEARCH_FOR_ITEMS_FAILURE } from '../action-constants';

export const searchForItems = () => (dispatch) => {
  dispatch({ type: SEARCH_FOR_ITEMS_REQUEST });

  return fetch('public/data/items.json')
      .then((response) => {
        dispatch({ type: SEARCH_FOR_ITEMS_SUCCESS, items: response.json });
      })
      .catch((error) => {
        dispatch({ type: SEARCH_FOR_ITEMS_FAILURE, error });
      });
};

export default searchForItems;