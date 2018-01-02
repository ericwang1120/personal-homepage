/**
*
* AppSidebar
*
*/

import React from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import messages from './messages';


function AppSidebar(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <Sidebar as={Menu} animation="overlay" width="thin" visible={props.visible} icon="labeled" vertical inverted>
      <Menu.Item as={Link} to="/resume" name="resume" onClick={props.onToggle}>
        <Icon name="file text outline" />
        <FormattedMessage {...messages.resume} />
      </Menu.Item>
      <Menu.Item as={Link} to="/home" name="GitHub Repos" onClick={props.onToggle} >
        <Icon name="github" />
        <FormattedMessage {...messages.github} />
      </Menu.Item>
    </Sidebar>
  );
}

AppSidebar.propTypes = {
  visible: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default AppSidebar;
