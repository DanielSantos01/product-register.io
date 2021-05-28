import React from 'react';
import { Switch, RouteProps, useRouteMatch } from 'react-router-dom';

import SignIn from '../../screens/Auth/SignIn';
import Route from '../components/Route';

const AuthRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/`} component={SignIn} />
    </Switch>
  );
};

export default AuthRoutes;
