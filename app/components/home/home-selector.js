import { createPropsSelector } from 'reselect-immutable-helpers';

const getItems = state => state.items.get('list');
const getIsLoading = state => state.items.get('isLoading');

export default createPropsSelector({
  isLoading: getIsLoading,
  items: getItems
});