// import SideBarLayout from '../components/Layout/SideBarLayout';
import Pagenotfound from '../components/pages/Pagenotfound';
import { CheckOut, GioiThieu, Home, Products } from '../components';
import ProductDetail from '../components/pages/ProductDetail';

const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/home', component: Home },
	{ path: '/gioi-thieu', component: GioiThieu },
	{ path: '/check-out', component: CheckOut, layout: null },
	{ path: '/products', component: Products },
	{ path: '/product-detail', component: ProductDetail },
	{ path: '*', component: Pagenotfound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
