import { RECEIVED_LOGIN_STATE } from '../types/auth';

const initialState = {
  loggedIn: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
  
  case RECEIVED_LOGIN_STATE:
    return { ...state, ...action.payload };
  
  default:
    return state;
  }
};
