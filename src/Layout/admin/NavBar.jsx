import React from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../assets/img/logo.png';
import logo_small from '../assets/img/logo-small.png';
import closes from '../assets/img/icons/closes.svg';
import search from '../assets/img/icons/search.svg';
//
import notification from '../assets/img/icons/notification-bing.svg';
//
import avatar from '../assets/img/profiles/avt.png';
import logout from '../assets/img/icons/log-out.svg';

const NavBar = () => {
	return (
		<div className='header'>
			<div className='header-left active'>
				<Link to='/admin' class='logo'>
					<img src={logo} alt='' />
				</Link>
				<Link to='/admin' class='logo-small'>
					<img src={logo_small} alt='' />
				</Link>
				<a id='toggle_btn' href='javascript:void(0);'>
					{' '}
				</a>
			</div>

			<a id='mobile_btn' className='mobile_btn' href='#sidebar'>
				<span className='bar-icon'>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</a>

			<ul className='nav user-menu'>
				<li className='nav-item'>
					<div className='top-nav-search'>
						<a href='javascript:void(0);' className='responsive-search'>
							<i className='fa fa-search'></i>
						</a>
						<form action='#'>
							<div className='searchinputs'>
								<input type='text' placeholder='Tìm kiếm ...' />
								<div className='search-addon'>
									<span>
										<img src={closes} alt='img' />
									</span>
								</div>
							</div>
							<a className='btn' id='searchdiv'>
								<img src={search} alt='img' />
							</a>
						</form>
					</div>
				</li>
				<li className='nav-item dropdown'>
					<a href='javascript:void(0);' className='dropdown-toggle nav-link' data-bs-toggle='dropdown'>
						<img src={notification} alt='img' />
						<span className='badge rounded-pill'>0</span>
					</a>
					<div className='dropdown-menu notifications'>
						<div className='topnav-dropdown-header'>
							<span className='notification-title'>Thông báo</span>
							<a href='javascript:void(0)' className='clear-noti'>
								{' '}
								Xoá tất cả{' '}
							</a>
						</div>
						<div className='noti-content'>
							<ul className='notification-list'>
								{/* <li class='notification-message'>
									<a href='activities.html'>
										<div class='media d-flex'>
											<span class='avatar flex-shrink-0'>
												<img alt='' src={avatar1} />
											</span>
											<div class='media-body flex-grow-1'>
												<p class='noti-details'>
													<span class='noti-title'>John Doe</span> added new task
													<span class='noti-title'>Patient appointment booking</span>
												</p>
												<p class='noti-time'>
													<span class='notification-time'>4 mins ago</span>
												</p>
											</div>
										</div>
									</a>
								</li> */}
							</ul>
						</div>
						<div className='topnav-dropdown-footer'>
							<a href='activities.html'>Xem tất cả thông báo</a>
						</div>
					</div>
				</li>
				{/* User */}
				<li className='nav-item dropdown has-arrow main-drop'>
					<a
						href='javascript:void(0);'
						className='dropdown-toggle nav-link userset'
						data-bs-toggle='dropdown'
					>
						<span className='user-img'>
							<div className='mb-4'>
								<img className='' src={avatar} alt='' />
							</div>
						</span>
					</a>
					<div className='dropdown-menu menu-drop-user'>
						<div className='profilename'>
							<div className='profileset d-flex align-items-start'>
								<span className='user-img'>
									<img src={avatar} alt='' />
								</span>
								<div className='profilesets'>
									<h6>Trung Khiêm</h6>
									<h5>Admin</h5>
								</div>
							</div>
							<hr className='m-0' />
							<a className='dropdown-item' href='profile.html'>
								<i className='me-2' data-feather='user'></i> Trang cá nhân
							</a>
							<a className='dropdown-item' href='generalsettings.html'>
								<i className='me-2' data-feather='settings'></i> Cài đặt
							</a>
							<hr className='m-0' />
							<a className='dropdown-item logout pb-0' href='signin.html'>
								<img src={logout} className='me-2' alt='img' />
								Đăng xuất
							</a>
						</div>
					</div>
				</li>
				{/* End user */}
			</ul>

			<div className='dropdown mobile-user-menu'>
				<a
					href='javascript:void(0);'
					className='nav-link dropdown-toggle'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					<i className='fa fa-ellipsis-v'></i>
				</a>
				<div className='dropdown-menu dropdown-menu-right'>
					<a className='dropdown-item' href='profile.html'>
						Trang cá nhân
					</a>
					<a className='dropdown-item' href='generalsettings.html'>
						Cài đặt
					</a>
					<a className='dropdown-item' href='signin.html'>
						Đăng xuất
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
