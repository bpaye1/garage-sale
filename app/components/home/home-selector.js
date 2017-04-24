import { createSelector } from 'reselect';

const getItems = state => state.items.get('list');
const getIsLoading = state => state.items.get('isLoading');

export default createSelector(getItems, getIsLoading, (items, isLoading) => ({ items, isLoading }));