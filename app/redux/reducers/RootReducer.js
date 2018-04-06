import { combineReducers } from 'redux';
import Navigation from './Navigation';
import Auth from './Auth';

export default combineReducers({
  nav: Navigation,
  auth: Auth
});