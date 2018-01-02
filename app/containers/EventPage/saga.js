import request from 'utils/request';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { makeSelectUsername } from './selectors';

import { LOAD_EVENTS } from './constants';
import { loadEventsSuccess, loadEventsFail } from './actions';

export function* getEvents() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const repos = yield call(request, requestURL);
    yield put(loadEventsSuccess(repos, username));
  } catch (err) {
    yield put(loadEventsFail(err));
  }
}

export default function* eventsData() {
  yield takeLatest(LOAD_EVENTS, getEvents);
}
