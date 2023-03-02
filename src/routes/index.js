import SideBarLayout from "../components/Layout/SideBarLayout";
import { CheckOut, GioiThieu, Home, Products } from "../components";

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/gioi-thieu', component: GioiThieu},
    { path: '/check-out', component: CheckOut, layout: null},
    { path: '/products', component: Products, layout: SideBarLayout},
];


const privateRoutes = [
];

export { publicRoutes, privateRoutes };