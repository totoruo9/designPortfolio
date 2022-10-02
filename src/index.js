import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobleStyle } from './globalStyle';
import { router } from './router';
import { lightTheme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <RouterProvider router={router} />
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      <GlobleStyle />
    </React.StrictMode>
  </RecoilRoot>
);