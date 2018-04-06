import { eventChannel } from 'redux-saga';
import { takeEvery, take, call, put } from 'redux-saga/effects';
import { SUBSCRIBE_LOGIN_STATE, UNSUBSCRIBE_LOGIN_STATE } from '../types/auth';
import { updateLoginState } from '../actions/auth';
import firebase from 'react-native-firebase';

export default function* authSaga() {
  yield takeEvery(SUBSCRIBE_LOGIN_STATE, subscribeFirebaseLoginState);
  yield takeEvery(UNSUBSCRIBE_LOGIN_STATE, unsubscribeFirebaseLoginState);
}

function* subscribeFirebaseLoginState() {
  const channel = yield call(getAuthChannel);
  const result = yield take(channel);
  if (result.user === null) {
    yield put(updateLoginState({ loggedIn: false, user: {} }));
  } else {
    yield put(updateLoginState({ loggedIn: true, user: result.user }));
  }
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