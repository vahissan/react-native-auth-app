import React, { Component } from 'react';
import {} from 'react-native';
import Store from './redux/Store';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <RootContainer />
      </Provider>
    );
  }
}