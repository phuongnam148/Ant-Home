import React from 'react';
import './admincss/sidebar.scss';

const sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='top'>
				<span className='logo'>Admin-Ant-Home</span>
			</div>
			<hr />
			<div className='center'>
				<ul>
					<p className='tittle'>MAIN</p>
					<li>
						<span>Dashboard</span>
					</li>
					<p className='tittle'>LISTS</p>
					<li>
						<span>Users</span>
					</li>
					<li>
						<span>Products</span>
					</li>
					<li>
						<span>Orders</span>
					</li>
					<li>
						<span>Delivery</span>
					</li>
					<p className='tittle'>USEFUL</p>
					<li>
						<span>Stats</span>
					</li>
					<li>
						<span>Notifications</span>
					</li>
					<p className='tittle'>SERVICE</p>
					<li>
						<span>System Health</span>
					</li>
					<li>
						<span>Logs</span>
					</li>
					<li>
						<span>Settings</span>
					</li>
					<p className='tittle'>USER</p>
					<li>
						<span>Profile</span>
					</li>
					<li>
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className='bottom'>
				<div className='colorOption'></div>
				<div className='colorOption'></div>
			</div>
		</div>
	);
};

export default sidebar;
