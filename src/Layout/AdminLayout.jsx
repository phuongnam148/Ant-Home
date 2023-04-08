import React from 'react';
import { Outlet } from 'react-router-dom';

// Import CSS
import './assets/css/animate.css';
import './assets/plugins/select2/css/select2.min.css';
import './assets/css/dataTables.bootstrap4.min.css';
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
import './assets/css/style.css';

// Import Js
import './assets/js/jquery-3.6.0.min.js';
import './assets/js/feather.min.js';
import './assets/js/jquery.slimscroll.min.js';
import './assets/js/jquery.dataTables.min.js';
import './assets/js/dataTables.bootstrap4.min.js';
import './assets/plugins/select2/js/select2.min.js';
import './assets/plugins/sweetalert/sweetalert2.all.min.js';
import './assets/plugins/sweetalert/sweetalerts.min.js';
import './assets/js/script.js';

// Import component
import NavBar from './admin/NavBar';
import SiderBar from './admin/SiderBar';

// eslint-disable-next-line react/prop-types
const AdminLayout = () => {
	return (
		<div className='main-wrapper'>
			<NavBar />
			<SiderBar />
			<div className='page-wrapper'>
				<Outlet />
			</div>
		</div>
	);
};

export default AdminLayout;
