/*
 *
 * EventPage actions
 *
 */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_FAIL,
  CHANGE_USERNAME,
} from './constants';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function loadEvents() {
  return {
    type: LOAD_EVENTS,
  };
}

export function loadEventsSuccess(events, username) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
    username,
  };
}

export function loadEventsFail(error) {
  return {
    type: LOAD_EVENTS_FAIL,
    error,
  };
}
