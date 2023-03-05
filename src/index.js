import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/scss/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GlobalStyles>
			<App />
		</GlobalStyles>
	</React.StrictMode>
);
