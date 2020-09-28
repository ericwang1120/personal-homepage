/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H3 from 'components/H3';

import { Menu, Container, Icon } from 'semantic-ui-react';
import LocaleToggle from 'containers/LocaleToggle';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import B from './B';

const HeaderMenu = styled(Menu)`
  margin: 0!important;
`;

const PageDescription = styled(Menu.Item)`
  @media (max-width: 768px){
    display: none!important;
  }
`;

class Header extends React.PureComponent {
  render() {
    return (
      <HeaderMenu size="large" onClick={this.props.onClick}>
        <Container fluid>
          <Menu.Item as="a" onClick={this.props.onToggle}>
            <Icon size="large" name="list layout" />
            <B>
              <FormattedMessage {...messages.menuName} />
            </B>
          </Menu.Item>
          <PageDescription>
            <H3>
              <FormattedMessage {...messages.header} />
            </H3>
          </PageDescription>
          <Menu.Item as="a" href="mailto:eric.kiwi@outlook.com">
            <Icon size="large" name="mail outline" />
            <B>
              <FormattedMessage {...messages.mailToMe} />
            </B>
          </Menu.Item>
          <Menu.Item as="a" href="https://www.dropbox.com/s/g7fvlbt6jq3pdhk/CV_Eric%20Wang.pdf?dl=0" target="_blank">
            <Icon size="large" name="cloud download" />
            <B>
              <FormattedMessage {...messages.download} />
            </B>
          </Menu.Item>
          <Menu.Item position="right">
            <LocaleToggle />
          </Menu.Item>
        </Container>
      </HeaderMenu>
    );
  }
}

Header.propTypes = {
  onToggle: PropTypes.func,
  onClick: PropTypes.func,
};

export default Header;
