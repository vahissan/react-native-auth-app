import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

class SettingsContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button title="Go To Home"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default SettingsContainer;