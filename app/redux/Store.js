import Config from "../config/AppConfig";
import { createStore, applyMiddleware } from "redux";
import RootReducer from './reducers/RootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import Navigation from './middleware/Navigation';
import Debounce from './middleware/Debounce';

const ReduxLogger = createLogger({
  collapsed: true,
  diff: true
});

////////////////////////////////////////
// Add all production middleware here //
////////////////////////////////////////

const middleware = [
  Debounce,
  Navigation
];

////////////////////////////////////////

if (Config.debugRedux) {
  middleware = [...middleware, ReduxLogger];
}

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = RootReducer;
    store.replaceReducer(nextRootReducer);

    // const newYieldedSagas = require("../Sagas").default;
    // sagasManager.cancel();
    // sagasManager.done.then(() => {
    //   sagasManager = sagaMiddleware.run(newYieldedSagas);
    // });
  });
}

export default store;