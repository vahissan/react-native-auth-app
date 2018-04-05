import Config from './AppConfig';
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (Config.enableReactotron) {
  Reactotron.configure({ name: Config.appName })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  // Clear Reactotron history every time app loads
  Reactotron.clear();

  // Workaround to make Reactotron available in Store.js (and other files if needed)
  global.tron = Reactotron;
}