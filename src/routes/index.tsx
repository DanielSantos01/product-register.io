import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../hooks/Auth';
import { SheetsProvider } from '../hooks/Sheets';
import Routes from './Routes';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <SheetsProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </SheetsProvider>
  </BrowserRouter>
);

export default AppRoutes;
