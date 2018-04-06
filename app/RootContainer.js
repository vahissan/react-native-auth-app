import React, { Component } from 'react';
import { View } from 'react-native';
import { StatusBar } from './components';
import AppNavigator from "./router/AppNavigator";
import Theme from './theme';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import SplashScreen from 'react-native-splash-screen';
import { 
  subscribeToLoginState, 
  unsubscribeFromLoginState 
} from './redux/actions/auth';

const addListener = createReduxBoundAddListener("root");
class RootContainer extends Component {
  componentDidMount() {
    this.props.subscribeToLoginState();
    SplashScreen.hide();
  }

  componentWillUnmount() {
    this.props.unsubscribeFromLoginState();
  }

  render() {
    console.log('AUTH', this.props.auth);
    return (
      <View style={Theme.styles.appRoot}>
        <StatusBar />
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  subscribeToLoginState: () => dispatch(subscribeToLoginState()),
  unsubscribeFromLoginState: () => dispatch(unsubscribeFromLoginState())
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
