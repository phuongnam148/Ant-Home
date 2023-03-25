import React from 'react';
import './admincss/sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
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
						<DashboardIcon className='icon' />
						<span>Dashboard</span>
					</li>
					<p className='tittle'>LISTS</p>
					<li>
						<PersonOutlineOutlinedIcon className='icon' />
						<span>Users</span>
					</li>
					<li>
						<ProductionQuantityLimitsIcon className='icon' />
						<span>Products</span>
					</li>
					<li>
						<ChromeReaderModeOutlinedIcon className='icon' />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className='icon' />
						<span>Delivery</span>
					</li>
					<p className='tittle'>USEFUL</p>
					<li>
						<AssessmentIcon className='icon' />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsNoneIcon className='icon' />
						<span>Notifications</span>
					</li>
					<p className='tittle'>SERVICE</p>
					<li>
						<SettingsSystemDaydreamOutlinedIcon className='icon' />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyIcon className='icon' />
						<span>Logs</span>
					</li>
					<li>
						<SettingsIcon className='icon' />
						<span>Settings</span>
					</li>
					<p className='tittle'>USER</p>
					<li>
						<AccountCircleOutlinedIcon className='icon' />
						<span>Profile</span>
					</li>
					<li>
						<LogoutIcon className='icon' />
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
