import React, { Component } from 'react';
import {} from 'react-native';
import { store, persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}