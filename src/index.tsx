import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import * as serviceWorker from 'serviceWorker';
import { createGlobalStyle } from 'styled-components';

import rootReducer from '../src/modules';

/* Internal dependencies */
import App from './routes';

const store = createStore(rootReducer);

const GlobalStyle = createGlobalStyle`
    * {
		font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
	}
	html, body, #root {
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

    div {
        box-sizing: border-box;
    }
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
