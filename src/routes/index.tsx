import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../hooks/Auth';
import Routes from './Routes';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </BrowserRouter>
);

export default AppRoutes;
