import Config from "../config/AppConfig";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

let middleware = [
  Debounce,
  Navigation
];

////////////////////////////////////////

if (Config.debugRedux) {
  middleware = [ReduxLogger, ...middleware];
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

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

export { store, persistor };