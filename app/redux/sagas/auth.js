import { eventChannel } from 'redux-saga';
import { takeEvery, take, call, put, select } from 'redux-saga/effects';
import { SUBSCRIBE_LOGIN_STATE, UNSUBSCRIBE_LOGIN_STATE } from '../types/auth';
import { updateLoginState } from '../actions/auth';
import firebase from 'react-native-firebase';
import { getCurrentNavigator } from '../selectors/nav';
import { NavigationActions } from 'react-navigation';

export default function* authSaga() {
  yield takeEvery(SUBSCRIBE_LOGIN_STATE, subscribeFirebaseLoginState);
  yield takeEvery(UNSUBSCRIBE_LOGIN_STATE, unsubscribeFirebaseLoginState);
}

function* subscribeFirebaseLoginState() {
  const channel = yield call(getAuthChannel);
  const result = yield take(channel);
  let loggedIn = false;
  if (result.user === null) {
    yield put(updateLoginState({ loggedIn, user: {} }));
  } else {
    loggedIn = true;
    yield put(updateLoginState({ loggedIn, user: result.user }));
  }
  yield updateRoute(loggedIn);
}

function* unsubscribeFirebaseLoginState() {
  yield call(this.authChannel.close);
}

function getAuthChannel() {
  if (!this.authChannel) {
    this.authChannel = eventChannel(emit => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => emit({ user }));
      return unsubscribe;
    });
  }

  return this.authChannel;
}

function* updateRoute(loggedIn) {
  const currentNavigator = yield select(getCurrentNavigator);
  if (loggedIn && (currentNavigator === 'LoggedOut' || currentNavigator === 'AppLoading')) {
    yield put(NavigationActions.navigate({ routeName: 'LoggedIn' }));
  } else if (!loggedIn && (currentNavigator === 'LoggedIn' || currentNavigator === 'AppLoading')) {
    yield put(NavigationActions.navigate({ routeName: 'LoggedOut' }));
  }
}