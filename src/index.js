import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/scss/app.scss';
import './components/GlobalStyles/GlobalStyles.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CheckOut, GioiThieu, Home, Products } from './components';
import DefaultLayout from './Layout/DefaultLayout';
import ProductDetail from './components/pages/ProductDetail';
import Login from './components/pages/login/Login';
import Pagenotfound from './components/pages/Pagenotfound';
import Register from './components/pages/login/Register';
import Account from './components/pages/account/Account';
import Orders from './components/pages/account/Orders';
import Changepassword from './components/pages/account/Changepassword';
import Addresses from './components/pages/account/Addresses';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		errorElement: <Pagenotfound />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/product/:id', element: <ProductDetail /> },
			{ path: '/gioi-thieu', element: <GioiThieu /> },
			{ path: '/products', element: <Products /> },
			{ path: '/login', element: <Login /> },

			{ path: '/register', element: <Register /> },
			{ path: '/account', element: <Account /> },
			{ path: '/account/orders', element: <Orders /> },
			{ path: '/account/changepassword', element: <Changepassword /> },
			{ path: '/account/addresses', element: <Addresses /> },
			{ path: '/check-out', element: <CheckOut /> },

		],
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
