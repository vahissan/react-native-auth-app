import React, { PureComponent } from "react";
import { StatusBar, Platform } from "react-native";
import Theme from "../../theme";

class StatusBarComponent extends PureComponent {
  render() {
    return Platform.select({
      ios: (
        <StatusBar
          translucent
          barStyle="dark-content"
        />
      ),
      android: (
        <StatusBar
          backgroundColor={Theme.colors.primaryColor}
          barStyle="light-content"
        />
      )
    });
  }
}

export default StatusBarComponent;
