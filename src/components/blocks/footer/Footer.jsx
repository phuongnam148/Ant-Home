import React from 'react';
import './Footer.scss';
import logo from '../../../images/logo.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='container-fluid footer d-flex flex-column'>
			<div className='row px-2 pt-3'>
				<div className='col-12 col-md-6 col-lg-3'>
					<h4 className='title-footer mb-2'>Liên hệ với Ant Home</h4>
					<div className='footer-body'>
						<div className='mb-2'>
							<strong>Địa chỉ:</strong> 70 Lu Gia, Ward 15, District 11, Ho Chi Minh City
						</div>
						<div className='mb-2'>
							<strong>Điện thoại:</strong> 1900 6750
						</div>
						<div className='mb-2'>
							<strong>Email:</strong> suppor@anthome.vn
						</div>
						<div className='d-flex'>
							<img className='col-6 col-sm-4 col-md-6 col-lg-10 img-fluid' src={logo} alt='' />
						</div>
					</div>
				</div>
				<div className='col-12 col-md-6 col-lg-3'>
					<h4 className='title-footer'>Về chúng tôi</h4>
					<div>
						<ul>
							<li>
								<Link to='/'>Giới thiệu</Link>
							</li>
							<li>
								<Link to='/'>Chính sách bảo mật về thanh toán</Link>
							</li>
							<li>
								<Link to='/'>Bảo mật thông tin cá nhân</Link>
							</li>
							<li>
								<Link to='/'>Quy chế hoạt động</Link>
							</li>
							<li>
								<Link to='/'>Bán hàng cùng Ant Home</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='col-12 col-md-6 col-lg-3 mt-md-3'>
					<h4 className='title-footer'>Hỗ trợ khách hàng</h4>
					<ul>
						<li>
							<Link to='/'>Hướng dẫn đặt hàng</Link>
						</li>
						<li>
							<Link to='/'>Quy chế giao hàng & thanh toán</Link>
						</li>
						<li>
							<Link to='/'>Quy trình đổi trả & bảo hành</Link>
						</li>
						<li>
							<Link to='/'>Chính sách giải quyết khiếu nại</Link>
						</li>
					</ul>
				</div>
				<div className='col-12 col-md-6 col-lg-3 mt-md-3'>
					<h4 className='title-footer'>Kết nối với chúng tôi</h4>
					<div className='icon-contact row'>
						<div>
							<Link to='/'>
								<i className='fa-brands fa-facebook-f'></i>
							</Link>
							<Link to='/'>
								<i className='fa-brands fa-twitter'></i>
							</Link>
							<Link to='/'>
								<i className='fa-brands fa-youtube'></i>
							</Link>
							<Link to='/'>
								<i className='fa-brands fa-instagram'></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='copyright container-fluid'>
				<div className='text-center'>
					<span>© Bản quyền thuộc về Kiến Vàng | Cung cấp bởi Sapo</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
