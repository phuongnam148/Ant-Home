import React from 'react';
import Sidebar from '../admin/Sidebar';
import Navbar from '../admin/Navbar';
import './admincss/homeadmin.scss';
import Widget from '../admin/Widget';
import Featured from './Featured';
import Chart from './Chart';
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
				<div className='charts'>
					<Featured />
					<Chart />
				</div>
				<div className='listContainer'>
					<div className='listTitle'>Latest Transactions</div>
				</div>
			</div>
		</div>
	);
};

export default Adminhome;
