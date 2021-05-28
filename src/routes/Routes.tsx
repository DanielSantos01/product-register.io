import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './components/Route';
import { AuthRoutes } from './RoutesGroups';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/auth" component={AuthRoutes} />
    <Redirect to="/auth" />
  </Switch>
);

export default Routes;
