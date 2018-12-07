import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import SettingsNav from '../Settings/SettingsNav';

import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotoPage from './PhotosPage';
import AccountPage from './AccountPage';

class SettingsDashboard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Column width={12}>
            <Switch>
              <Redirect exact from="/settings" to="/settings/basic" />
              <Route path="/settings/basic" component={BasicPage} />
              <Route path="/settings/About" component={AboutPage} />
              <Route path="/settings/Photos" component={PhotoPage} />
              <Route path="/settings/Account" component={AccountPage} />
            </Switch>
          </Grid.Column>
          <Grid.Column width={4}>
            <SettingsNav />
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default SettingsDashboard;
