const has = Object.prototype.hasOwnProperty;

export default (initialState, handlers) => (state = initialState, action) => {
  if (action && has.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};