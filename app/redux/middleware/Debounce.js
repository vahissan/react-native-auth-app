const pendingActions = {};

const validateAndPassthrough = (action, key, debounce, next) => {
  if (pendingActions[key]) {
    console.log('debounced', action.type, action);
    clearTimeout(pendingActions[key]);
  }

  pendingActions[key] = setTimeout(() => {
    delete pendingActions[key];
    next(action);
  }, debounce);
};

export default () => next => action => {
  const { debounce } = action.meta || {};

  if (action.type == 'Navigation/NAVIGATE') {
    const key = 'navigate/' + action.routeName;
    validateAndPassthrough(action, key, 500, next);
  } else {
    if (!debounce) {
      return next(action);
    }

    validateAndPassthrough(action, action.type, debounce, next);
  }
};
