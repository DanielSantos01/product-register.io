import React from 'react';
import {
  Switch,
  RouteProps,
  useRouteMatch,
} from 'react-router-dom';

import Board from '@screens/Board';
import Route from '../components/Route';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/`} component={Board} />
    </Switch>
  );
};

export default AppRoutes;
