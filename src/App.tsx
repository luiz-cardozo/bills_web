import React from 'react';

import { CssBaseline } from '@material-ui/core';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Hello world</h1>
        <GlobalStyle />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
};

export default App;
