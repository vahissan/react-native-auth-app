import React, { Component } from 'react';
import { View } from 'react-native';
import { StatusBar } from './components';
import AppNavigator from "./Router";
import Theme from './theme';

export default class RootContainer extends Component {
  render() {
    return (
      <View style={Theme.styles.appRoot}>
        <StatusBar />
        <AppNavigator />
      </View>
    )
  }
}
