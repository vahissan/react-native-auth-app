import Config from './AppConfig';
import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
} from "reactotron-react-native";

if (Config.enableReactotron) {
  Reactotron.configure({ name: Config.appName })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .useReactNative()
    .connect();
}