import { SUBSCRIBE_LOGIN_STATE, RECEIVED_LOGIN_STATE, UNSUBSCRIBE_LOGIN_STATE } from '../types/auth';

export const subscribeToLoginState = () => ({
  type: SUBSCRIBE_LOGIN_STATE,
  meta: {
    debounce: 200
  }
});

export const unsubscribeFromLoginState = () => ({
  type: UNSUBSCRIBE_LOGIN_STATE,
  meta: {
    debounce: 200
  }
});

export const updateLoginState = (payload) => ({
  type: RECEIVED_LOGIN_STATE,
  payload: payload
});