import { createSelector } from 'reselect';

/**
 * Direct selector to the eventPage state domain
 */
const selectEventPageDomain = (state) => state.get('eventPage');

const makeSelectUsername = () => createSelector(
  selectEventPageDomain,
  (eventPageState) => eventPageState.get('username')
);

const makeSelectLoading = () => createSelector(
  selectEventPageDomain,
  (eventPageState) => eventPageState.get('loading')
);

const makeSelectEvents = () => createSelector(
  selectEventPageDomain,
  (eventPageState) => eventPageState.getIn(['userData', 'events'])
);

const makeSelectError = () => createSelector(
  selectEventPageDomain,
  (eventPageState) => eventPageState.get('error')
);

export {
  selectEventPageDomain,
  makeSelectUsername,
  makeSelectLoading,
  makeSelectEvents,
  makeSelectError,
};
