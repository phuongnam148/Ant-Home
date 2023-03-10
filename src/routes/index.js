// import SideBarLayout from '../components/Layout/SideBarLayout';
import Pagenotfound from '../components/pages/Pagenotfound';
import { CheckOut, GioiThieu, Home, Products } from '../components';
import ProductDetail from '../components/pages/ProductDetail';
import Login from '../components/pages/login/Login';

const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/home', component: Home },
	{ path: '/gioi-thieu', component: GioiThieu },
	{ path: '/check-out', component: CheckOut, layout: null },
	{ path: '/products', component: Products },
	{ path: '/product-detail', component: ProductDetail },
	{ path: '*', component: Pagenotfound },
	{ path: '/login', component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
