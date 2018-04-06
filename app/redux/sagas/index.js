import { all } from 'redux-saga/effects';
import authSaga from './auth';

export default function* rootSaga() {
  // Add others sagas here
  yield all([
    authSaga()
  ]);
}