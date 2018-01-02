/*
 * ResumePage
 *
 * List resume
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import H1 from 'components/H1';
import H2 from 'components/H2';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class ResumePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Resume Page</title>
          <meta name="description" content="Resume of Eric Wang" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.name} />
        </H1>
        <H2>
          <FormattedMessage {...messages.education} />
        </H2>
        <List>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.massey} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.masseyDescription} />
            </p>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.centralSouth} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.centralSouthDescription} />
            </p>
          </ListItem>
        </List>
        <H2>
          <FormattedMessage {...messages.technique} />
        </H2>
        <List>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.frontend} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.frontendDescription} />
            </p>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.backend} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.backendDescription} />
            </p>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.database} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.databaseDescription} />
            </p>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.tool} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.toolDescription} />
            </p>
          </ListItem>
        </List>
        <H2>
          <FormattedMessage {...messages.experience} />
        </H2>
        <List>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.centralStation} />
            </ListItemTitle>
          </ListItem>
          <p>
            <FormattedMessage {...messages.centralStationDescription} />
          </p>
          <List>
            <ListItem>
              <ListItemTitle>
                <FormattedMessage {...messages.centralStationExperience1} />
              </ListItemTitle>
            </ListItem>
            <ListItem>
              <ListItemTitle>
                <FormattedMessage {...messages.centralStationExperience2} />
              </ListItemTitle>
            </ListItem>
            <ListItem>
              <ListItemTitle>
                <FormattedMessage {...messages.centralStationExperience3} />
              </ListItemTitle>
            </ListItem>
          </List>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.guoChuang} />
            </ListItemTitle>
          </ListItem>
          <p>
            <FormattedMessage {...messages.guoChuangDescription} />
          </p>
          <List>
            <ListItem>
              <ListItemTitle>
                <FormattedMessage {...messages.guoChuangExperience1} />
              </ListItemTitle>
            </ListItem>
            <ListItem>
              <ListItemTitle>
                <FormattedMessage {...messages.guoChuangExperience2} />
              </ListItemTitle>
            </ListItem>
            <ListItem>
              <ListItemTitle>
                <FormattedMessage {...messages.guoChuangExperience3} />
              </ListItemTitle>
            </ListItem>
          </List>
        </List>
        <H2>
          <FormattedMessage
            {...messages.openSource}
          />
        </H2>
        <List>
          <ListItem>
            <ListItemTitle>
              Generate-Ngrx <A href="https://github.com/ericwang1120/generate-ngrx" target="_blank">GitHub</A> <A href="https://www.npmjs.com/package/generate-ngrx" target="_blank">Npm</A>
            </ListItemTitle>
            <p>
              <FormattedMessage
                {...messages.openSourceDescription1}
              />
            </p>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              Yummy-Rabbit: <A href="https://github.com/ericwang1120/yummy-rabbit" target="_blank">GitHub</A> <A href="https://ericwang1120.github.io/" target="_blank">Demo</A>
            </ListItemTitle>
            <p>
              <FormattedMessage
                {...messages.openSourceDescription2}
              />
            </p>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage
                {...messages.homepage}
              />: <A href="https://github.com/ericwang1120/ezyTrade" target="_blank">GitHub</A> <A href="https://ericwangkiwi.github.io/" target="_blank">Demo</A>
            </ListItemTitle>
            <p>
              <FormattedMessage
                {...messages.openSourceDescription3}
              />
            </p>
          </ListItem>
        </List>
        <H2>
          <FormattedMessage {...messages.referees} />
        </H2>
        <p>
          <FormattedMessage {...messages.refereesContent} />
        </p>
      </div>
    );
  }
}
