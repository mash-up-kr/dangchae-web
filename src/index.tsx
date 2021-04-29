import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from 'serviceWorker';
import { createGlobalStyle } from 'styled-components';

/* Internal dependencies */
import App from './routes';

const GlobalStyle = createGlobalStyle`
    * {
		font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
		margin: 0;
		padding: 0;
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
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
