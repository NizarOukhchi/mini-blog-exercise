import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
