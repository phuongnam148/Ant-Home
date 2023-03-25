import React from 'react';
import Sidebar from '../admin/Sidebar';
import Navbar from '../admin/Navbar';
import './admincss/homeadmin.scss';
const Adminhome = () => {
	return (
		<div className='adminhome'>
			<Sidebar />
			<div className='container'>
				<Navbar />
				Home container
			</div>
		</div>
	);
};

export default Adminhome;
