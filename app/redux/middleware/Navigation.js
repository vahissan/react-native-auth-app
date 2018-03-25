import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
export default createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
