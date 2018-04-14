import { StackNavigator, SwitchNavigator } from "react-navigation";
import HomeContainer from "../screens/home/HomeContainer";
import SettingsContainer from "../screens/settings/SettingsContainer";
import LoginContainer from '../screens/login/LoginContainer';

const LoggedInNavigator = StackNavigator({
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

const LoggedOutNavigator = StackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      title: "Login"
    }
  }
});

const AppNavigator = SwitchNavigator({
  LoggedOut: LoggedOutNavigator,
  LoggedIn: LoggedInNavigator
}, {
  headerMode: 'none'
});

export default AppNavigator;
