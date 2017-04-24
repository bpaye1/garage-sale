const has = Object.prototype.hasOwnProperty;

const reducer = (state, handlers, action) => {
  if (action && has.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};

export default (initialState, handlers) => action => reducer(initialState, handlers, action);