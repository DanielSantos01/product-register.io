import React from 'react';
import {
  Switch,
  RouteProps,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';

import Board from '@screens/Board';
import Route from '../components/Route';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/ulala`} component={Board} />
      <Redirect to={`${path}/ulala`} />
    </Switch>
  );
};

export default AppRoutes;
