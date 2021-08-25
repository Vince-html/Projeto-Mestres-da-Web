import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { GlobalStyles } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme/theme';
import { Provider } from 'react-redux';
// import configureStore from '../src/store/index';
import App from './Templates/App/App';
import store from '../src/store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
