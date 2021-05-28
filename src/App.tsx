import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppRoutes from './routes';
import GlobalStyles from './styles/global';
import defaultTheme from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <AppRoutes />
  </ThemeProvider>
);

export default App;
