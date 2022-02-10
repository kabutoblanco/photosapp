import { combineReducers } from 'redux';

import photos from './photos';
import utils from './utils';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  photos,
  utils,
  errors,
  messages
});