import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../../images/logo.webp';

const Header = () => {
	return (
		<header className='header container-fluid'>
			<div className='container'>
				<div className='d-flex align-items-center justify-content-between evo-header-padding'>
					{/* Menu icon */}
					<div className='d-inline-block d-lg-none col-2 col-md-2'>
						<button
							className='btn menu-icon'
							data-bs-toggle='offcanvas'
							data-bs-target='#offcanvasExample'
							aria-controls='offcanvasExample'
						>
							<i className='fa-solid fa-bars'></i>
						</button>
					</div>
					{/* Logo */}
					<div className='header-logo col-5 col-md-3 col-lg-2'>
						<div className='box-logo'>
							<Link to='/home'>
								<img className='img-fluid' src={logo} alt='' />
							</Link>
						</div>
					</div>
					{/* Account */}
					<div className='header-account d-flex col-2 col-md-2 justify-content-md-evenly'>
						<div className='btn-search d-block d-lg-none'>
							<i className='fa-solid fa-magnifying-glass'></i>
						</div>
						<div className='box-account'>
							<div className='d-none d-lg-block'>
								<span>Yêu thích</span>
							</div>
							<div className='d-none d-lg-block'>
								<span>Tài khoản</span>
							</div>
							<div>
								<i className='fa-solid fa-cart-shopping'></i>
								<span className='d-none d-lg-block'>Giỏ hàng</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Offcanvas */}
			<div
				className='offcanvas offcanvas-start'
				tabIndex='-1'
				id='offcanvasExample'
				aria-labelledby='offcanvasExampleLabel'
			>
				<div className='offcanvas-header'>
					<h5 className='offcanvas-title' id='offcanvasExampleLabel'>
						Danh mục
					</h5>
					<button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
				</div>
				<div className='offcanvas-body p-0'>
					<div className='box-ul'>
						<ul className='list-group'>
							<Link className='nav-link' to='/home'>
								<li className='list-group-item-link px-3 link-active'>Trang chủ</li>
							</Link>
							<Link className='nav-link' to='/gioi-thieu'>
								<li className='list-group-item-link px-3'>Giới thiệu</li>
							</Link>
							<Link className='nav-link' to='/products'>
								<li className='list-group-item-link px-3'>
									<div className='d-flex justify-content-between'>
										<div>Sản phẩm</div>
										<div>
											<i className='fa-regular fa-plus'></i>
										</div>
									</div>
								</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Deal hot</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Thương hiệu nổi bật</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Tin tức</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Liên hệ</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>FAQ</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Đăng nhập</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Đăng ký</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>
									Sản phẩm yêu thích
									<span className='ms-1'>(0)</span>
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
