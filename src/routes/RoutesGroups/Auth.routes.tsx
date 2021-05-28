import React from 'react';
import {
  Switch,
  RouteProps,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';

import SignIn from '@screens/Auth/SignIn';
import SignUp from '@screens/Auth/SignUp';
import Route from '../components/Route';

const AuthRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/signin`} component={SignIn} />
      <Route path={`${path}/signup`} component={SignUp} />
      <Redirect to={`${path}/signin`} />
    </Switch>
  );
};

export default AuthRoutes;
