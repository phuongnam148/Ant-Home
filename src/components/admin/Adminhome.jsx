import React from 'react';
import Sidebar from '../admin/Sidebar';
import Navbar from '../admin/Navbar';
import './admincss/homeadmin.scss';
import Widget from '../admin/Widget';
const Adminhome = () => {
	return (
		<div className='adminhome'>
			<Sidebar />
			<div className='container'>
				<Navbar />
				<div className='widgets'>
					<Widget type='user' />
					<Widget type='order' />
					<Widget type='earning' />
					<Widget type='balance' />
				</div>
			</div>
		</div>
	);
};

export default Adminhome;
