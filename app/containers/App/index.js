/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Sidebar, Container } from 'semantic-ui-react';

import HomePage from 'containers/HomePage/Loadable';
import ResumePage from 'containers/ResumePage/Loadable';
import EventPage from 'containers/EventPage/index';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import Header from 'components/Header';

import AppSidebar from 'components/AppSidebar';

const AppWrapper = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled(Header) `
  flex: none;
`;

const AppFooter = styled(Footer) `
  flex: none;
`;

const AppPushAble = styled(Sidebar.Pushable) `
  background-color: #fafafa;
  overflow-y: scroll;
  flex: 1 0 0;
`;

const AppContainer = styled(Container) `
  padding: 1em 0!important;
`;

export default class App extends React.Component {  // eslint-disable-line react/prefer-stateless-function
  state = {
    visible: false,
  }

  // When pressing esc, close side bar.
  componentDidMount() {
    document.addEventListener('keydown', this.disableVisibility, false);
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  }

  disableVisibility = () => {
    if (this.state.visible === true) {
      this.setState({ visible: false });
    }
  }

  render() {
    return (
      <AppWrapper ref={this.handleContextRef}>
        <AppHeader onToggle={this.toggleVisibility} onClick={this.disableVisibility} />
        <Helmet
          titleTemplate="%s - Eric Wang's Personal Homepage"
          defaultTitle="Eric Wang's Personal Homepage"
        >
          <meta name="description" content="Eric Wang's Personal Homepage" />
        </Helmet>
        <AppSidebar {...this.state} onToggle={this.toggleVisibility} />
        <AppPushAble onClick={this.disableVisibility}>
          <Sidebar.Pusher>
            <AppContainer>
              <Switch>
                <Route exact path="/" component={ResumePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/resume" component={ResumePage} />
                <Route path="/events" component={EventPage} />
                <Route path="" component={NotFoundPage} />
              </Switch>
            </AppContainer>
          </Sidebar.Pusher>
        </AppPushAble>
        <AppFooter onClick={this.disableVisibility} />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  toggleVisibility: PropTypes.func,
};
