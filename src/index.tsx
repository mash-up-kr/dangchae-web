import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'sanitize.css/sanitize.css';

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, Global, jsx } from '@emotion/react';
import styled from '@emotion/styled';
/* Internal dependencies */
import store from 'features';
/* External dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker';

/* Internal dependencies */
import App from './routes';

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <Global
          styles={css`
            * {
              font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
            }
            html,
            body,
            #root {
              min-width: 1200px;
              width: 100%;
              height: 100%;
            }
            #root {
              background: #f8f7ed;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}
        />
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
