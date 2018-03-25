import { StackNavigator } from "react-navigation";
import HomeContainer from "./screens/home/HomeContainer";
import SettingsContainer from "./screens/settings/SettingsContainer";

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      title: "Home"
    }
  },
  Settings: {
    screen: SettingsContainer,
    navigationOptions: {
      title: "Settings"
    }
  }
});

export default AppNavigator;
