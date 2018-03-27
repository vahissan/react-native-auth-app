const pendingActions = {};
const NAV_ACTION_DEBOUNCE = 290;

const validateAndPassthrough = (action, key, debounce, next) => {
  const now = (new Date()).getTime();
  const diff = now - pendingActions[key];
  if (pendingActions[key] && diff < 290) {
    console.log('Debounced action ' + key + ' repeated in ' + diff + 'ms', action);
  } else {
    pendingActions[key] = now;
    next(action);
  }
};

export default () => next => action => {
  const { debounce } = action.meta || {};

  if (action.type == 'Navigation/NAVIGATE') {
    const key = 'navigate/' + action.routeName;
    validateAndPassthrough(action, key, NAV_ACTION_DEBOUNCE, next);
  } else {
    if (!debounce) {
      return next(action);
    }

    validateAndPassthrough(action, action.type, debounce, next);
  }
};
