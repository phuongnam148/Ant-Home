/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './store.js';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

// Import our custom CSS
import './scss/style.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<AuthProvider>
					<App />
				</AuthProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
