/*
 *
 * EventPage reducer
 *
 */

import {
  fromJS,
} from 'immutable';
import {
  CHANGE_USERNAME,
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_FAIL,
} from './constants';

// The initial state of the State
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    events: false,
  },
  username: '',
});

function eventPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state
        .set('username', action.username.replace(/@/gi, ''));
    case LOAD_EVENTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set(['userData', 'events'], false);
    case LOAD_EVENTS_SUCCESS:
      return state
        .setIn(['userData', 'events'], action.events)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_EVENTS_FAIL:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default eventPageReducer;
