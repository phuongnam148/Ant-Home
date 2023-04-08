/* eslint-disable no-unused-vars */
import React from 'react';
// import App from './App';
import ReactDOM from 'react-dom/client';

// Import our custom CSS
import './scss/style.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

//
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
import Contact from './components/pages/Contact';
import Faq from './components/pages/faq';
// import Adminhome from './components/admin/Adminhome';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

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
			{ path: '/contact', element: <Contact /> },
			{ path: '/faq', element: <Faq /> },
		],
	},
	// { path: '/admin', element: <Adminhome /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);