import React, { Component } from 'react';
import { View } from 'react-native';
import { StatusBar } from './components';
import AppNavigator from "./router/AppNavigator";
import Theme from './theme';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

const addListener = createReduxBoundAddListener("root");
class RootContainer extends Component {
  render() {
    return <View style={Theme.styles.appRoot}>
        <StatusBar />
        <AppNavigator navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener
          })} />
      </View>;
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(RootContainer);
