import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Menu, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import A from 'components/A';
import styled from 'styled-components';
import messages from './messages';

const FooterMenu = styled(Menu) `
  margin: 0!important;

  @media (max-width: 768px)
  {
    display: none!important;
  }
`;

function Footer(props) {
  return (
    <FooterMenu size="large" onClick={props.onClick}>
      <Container fluid>
        <Menu.Item>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
              author: <A href="https://github.com/ericwang1120">Eric Wang</A>,
              semanticUIReact: <A href="https://react.semantic-ui.com/">Semantic UI React</A>,
            }}
          />
        </Menu.Item>
      </Container>
    </FooterMenu>
  );
}

Footer.propTypes = {
  onClick: PropTypes.func,
};

export default Footer;
