import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CheckOut, GioiThieu, Home, Products } from './components';
import DefaultLayout from './Layout/DefaultLayout';
import ProductDetail from './components/pages/ProductDetail';
import Login from './components/pages/login/Login';
import Pagenotfound from './components/pages/Pagenotfound';
import Register from './components/pages/login/Register';
// import Account from './components/pages/account/Account';
import Orders from './components/pages/account/Orders';
import Changepassword from './components/pages/account/Changepassword';
import Addresses from './components/pages/account/Addresses';
import Contact from './components/pages/Contact';
import Faq from './components/pages/faq';
import Unauthorized from './components/pages/Unauthorized';
// Admin
import AdminLayout from './Layout/AdminLayout';
import Admin from './page/admin/Admin';
import ListProduct from './page/admin/ListProduct';
// import PrivateRoute from './utils/PrivateRoute';
import AdProductDetail from './page/admin/AdProductDetail';

const App = () => {
	return (
		<Routes>
			{/* Default Layout */}
			<Route path='/' element={<DefaultLayout />}>
				<Route path='' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/product' element={<ProductDetail />} />
				<Route path='/gioi-thieu' element={<GioiThieu />} />
				<Route path='/products' element={<Products />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/unauthorized' element={<Unauthorized />} />
				{/* <Route path='/account' element={<Account />} /> */}
				{/* <Route element={<PrivateRoute role={['user', 'admin', 'ctv']} />}>
					<Route path='/account' element={<Account />} />
				</Route> */}
				{/* <PrivateRoute path='/account' element={<Account />} role={'user'} /> */}
				<Route path='/account/orders' element={<Orders />} />
				<Route path='/account/changepassword' element={<Changepassword />} />
				<Route path='/account/addresses' element={<Addresses />} />
				<Route path='/check-out' element={<CheckOut />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/faq' element={<Faq />} />
			</Route>
			{/* Admin Layout */}
			<Route path='/admin' element={<AdminLayout />}>
				<Route path='' element={<Admin />} />
				<Route path='listproduct' element={<ListProduct />} />
				<Route path='product-detail' element={<AdProductDetail />} />
			</Route>
			{/* Page not found */}
			<Route path='*' element={<Pagenotfound />} />
		</Routes>
	);
};

export default App;
