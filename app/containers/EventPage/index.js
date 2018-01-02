/**
 *
 * EventPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import H1 from 'components/H1';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUsername, makeSelectEvents, makeSelectLoading, makeSelectError } from './selectors';
import { changeUsername, loadEvents } from './actions';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Form from './Form';
import Input from './Input';


export class EventPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>EventPage</title>
          <meta name="description" content="Page for github user events" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="username">
            <Input
              id="username"
              type="text"
              placeholder="mxstbr"
              value={this.props.username}
              onChange={this.props.onChangeUsername}
            />
          </label>
        </Form>
      </article>
    );
  }
}

EventPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  events: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  events: makeSelectEvents(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'eventPage', reducer });
const withSaga = injectSaga({ key: 'eventPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventPage);
