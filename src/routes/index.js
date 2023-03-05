import SideBarLayout from '../components/Layout/SideBarLayout';
import Pagenotfound from '../components/pages/Pagenotfound';
import { CheckOut, GioiThieu, Home, Products } from '../components';

const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/home', component: Home },
	{ path: '/gioi-thieu', component: GioiThieu },
	{ path: '/check-out', component: CheckOut, layout: null },
	{ path: '/products', component: Products, layout: SideBarLayout },
	{ path: '*', component: Pagenotfound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
