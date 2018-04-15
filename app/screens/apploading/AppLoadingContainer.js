import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Theme from '../../theme';

class AppLoadingContainer extends Component {
  render() {
    return (
      <View style={Theme.styles.container}>
        <ActivityIndicator
          color={Theme.colors.altTextColor}
          size="large"
          animating={true} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: Theme.colors.altTextColor,
    marginTop: 5
  }
});

export default AppLoadingContainer;
