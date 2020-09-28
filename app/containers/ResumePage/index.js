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
import Section from 'components/Section';
import P from 'components/P';
import ReactGA from 'react-ga';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';


export default class ResumePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    ReactGA.initialize('UA-101172721-3');
    ReactGA.pageview(window.location.pathname);
  }
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
        <P>
          <FormattedMessage {...messages.summary} />
        </P>

        <Section>
          <H2>
            <FormattedMessage {...messages.experience} />
          </H2>

          <P>
            <ListItemTitle>
              <FormattedMessage {...messages.wineSearcher} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.wineSearcherDescription} />
            </p>
            <List>
              <ListItem>
                <FormattedMessage {...messages.wineSearcherExperience1} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.wineSearcherExperience2} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.wineSearcherExperience3} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.wineSearcherExperience4} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.wineSearcherExperience5} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.wineSearcherExperience6} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.wineSearcherExperience7} />
              </ListItem>
            </List>
          </P>
          <P>
            <ListItemTitle>
              <FormattedMessage {...messages.centralStation} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.centralStationDescription} />
            </p>
            <List>
              <ListItem>
                <FormattedMessage {...messages.centralStationExperience1} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.centralStationExperience2} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.centralStationExperience3} />
              </ListItem>
            </List>
          </P>
          <P>
            <ListItemTitle>
              <FormattedMessage {...messages.guoChuang} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.guoChuangDescription} />
            </p>
            <List>
              <ListItem>
                <FormattedMessage {...messages.guoChuangExperience1} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.guoChuangExperience2} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.guoChuangExperience3} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.guoChuangExperience4} />
              </ListItem>
            </List>
          </P>
        </Section>

        <Section>
          <H2>
            <FormattedMessage {...messages.technique} />
          </H2>
          <P>
            <List>
              <ListItem>
                <FormattedMessage {...messages.generalDescription} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.frontendDescription} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.backendDescription} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.databaseDescription} />
              </ListItem>
              <ListItem>
                <FormattedMessage {...messages.toolDescription} />
              </ListItem>
            </List>
          </P>
        </Section>

        <Section>
          <H2>
            <FormattedMessage {...messages.education} />
          </H2>
          <P>
            <ListItemTitle>
              <FormattedMessage {...messages.massey} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.masseyDescription} />
            </p>
          </P>
          <P>
            <ListItemTitle>
              <FormattedMessage {...messages.centralSouth} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.centralSouthDescription} />
            </p>
          </P>
        </Section>

        <Section>
          <H2>
            <FormattedMessage
              {...messages.openSource}
            />
          </H2>
          <P>
            <ListItemTitle>
              Generate-Ngrx <A href="https://github.com/ericwang1120/generate-ngrx" target="_blank">GitHub</A> <A href="https://www.npmjs.com/package/generate-ngrx" target="_blank">Npm</A>
            </ListItemTitle>
            <p>
              <FormattedMessage
                {...messages.openSourceDescription1}
              />
            </p>
          </P>
          <P>
            <ListItemTitle>
              <FormattedMessage
                {...messages.homepage}
              />: <A href="https://github.com/ericwang1120/persoal-homepage" target="_blank">GitHub</A> <A href="https://ericwangkiwi.github.io/" target="_blank">Demo</A>
            </ListItemTitle>
            <p>
              <FormattedMessage
                {...messages.openSourceDescription3}
              />
            </p>
          </P>
        </Section>

        <Section>
          <P>
            <H2>
              <FormattedMessage {...messages.referees} />
            </H2>
            <p>
              <FormattedMessage {...messages.refereesContent} />
            </p>
          </P>
        </Section>
      </div>
    );
  }
}
