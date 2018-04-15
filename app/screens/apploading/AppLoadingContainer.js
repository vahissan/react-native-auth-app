import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Theme from '../../theme';

class AppLoadingContainer extends Component {
  render() {
    return (
      <View style={Theme.styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default AppLoadingContainer;
