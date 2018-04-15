import Config from "../config/AppConfig";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import createSensitiveStorage from "redux-persist-sensitive-storage";
import RootReducer from './reducers/RootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import navigationMiddleware from './middleware/Navigation';
import debounceMiddleware from './middleware/Debounce';
import rootSaga from './sagas';

const reduxLogger = createLogger({
  collapsed: true,
  diff: true
});

const sagaMonitor = Config.enableReactotron ? global.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

////////////////////////////////////////
// Add all production middleware here //
////////////////////////////////////////

let middleware = [
  debounceMiddleware,
  sagaMiddleware,
  navigationMiddleware
];

////////////////////////////////////////

if (Config.debugRedux) {
  middleware = [reduxLogger, ...middleware];
}

const storage = createSensitiveStorage({
  keychainService: Config.iosKeychainService,
  sharedPreferencesName: Config.sharedPreferencesName
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['nav']
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const createAppropriateStore = Config.enableReactotron ? global.tron.createStore : createStore;
const store = createAppropriateStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

let sagasManager = sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = persistedReducer;
    store.replaceReducer(nextRootReducer);

    const newYieldedSagas = require("./sagas").default;
    sagasManager.cancel();
    sagasManager.done.then(() => {
      sagasManager = sagaMiddleware.run(newYieldedSagas);
    });
  });
}

export { store, persistor };