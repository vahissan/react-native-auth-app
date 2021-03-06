import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components';
import Theme from '../../theme';

class HomeContainer extends Component {
  goToSettings() {
    this.props.navigation.navigate('Settings');
  }

  render() {
    return (
      <View style={Theme.styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go To Settings" onPress={() => this.goToSettings()}/>
      </View>
    );
  }
}

export default HomeContainer;