import { createSelector } from 'reselect';

const navState = state => state.nav;

export const getCurrentRoute = createSelector(
  navState,
  nav => {
    let currentRoute = nav;
    while (currentRoute.routes) {
      currentRoute = currentRoute.routes[currentRoute.index];
    }
    return currentRoute.routeName;
  }
);

export const getCurrentNavigator = createSelector(
  navState,
  nav => nav.routes[nav.index].routeName
);