import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/animations/index.css';
import AppRoutes from './routes';
import GlobalStyles from './styles/global';
import defaultTheme from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <AppRoutes />
    <ToastContainer position="bottom-right" />
  </ThemeProvider>
);

export default App;
