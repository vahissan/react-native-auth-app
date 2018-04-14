import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components';
import Theme from '../../theme';

class LoginContainer extends Component {
  doLogin() {
    this.props.navigation.navigate('LoggedIn');
  }

  render() {
    return (
      <View style={Theme.styles.container}>
        <Text>Login Page</Text>
        <Button title="Login" onPress={() => this.doLogin()} />
      </View>
    );
  }
}

export default LoginContainer;