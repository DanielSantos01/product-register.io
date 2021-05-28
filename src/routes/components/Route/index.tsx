import React from 'react';
import { Route as ReactDOMRoute } from 'react-router-dom';

import { RouteProps } from './interfaces';

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
  <ReactDOMRoute
    {...rest}
    render={() => <Component />}
  />
);

export default Route;
