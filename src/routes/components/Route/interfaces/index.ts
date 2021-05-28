import React from 'react';
import { RouteProps as ReactDOMRouteProps } from 'react-router-dom';

export interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType<any>;
}
