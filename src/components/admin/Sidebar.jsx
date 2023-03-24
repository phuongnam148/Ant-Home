import React from 'react';
import './admincss/sidebar.scss';

const sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='top'>
				<span className='logo'>admin-ant-home</span>
			</div>
			<hr />
			<div className='center'>
				<ul>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
				</ul>
			</div>
			<div className='bottom'>color options</div>
		</div>
	);
};

export default sidebar;
