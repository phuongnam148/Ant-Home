import React from 'react';
import './Account.scss';

const Account = () => {
	return (
		<div className='account container'>
			<div className='row'>
				<div className='account-nav col-3'>
					<div className='nav-side'>
						<h4>TRANG TÀI KHOẢN</h4>
						<p>Xin chào,...</p> {/* Truyền dữ liệu từ db*/}
						<ul className='list-unstyled'>
							<li>
								<a href='#' className='title-info active'>
									Thông tin tài khoản!
								</a>
							</li>
							<li>
								<a href='/account/orders' className='title-info'>
									Đơn hàng của bạn
								</a>
							</li>
							<li>
								<a href='/account/changepassword' className='title-info'>
									Đổi mật khẩu
								</a>
							</li>
							<li>
								<a href='/account/addresses' className='title-info'>
									Số địa chỉ (0)
								</a>
							</li>
							<li>
								<a href='' className='title-info'>
									Đăng xuất
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='account-content col-9'>
					<h4>THÔNG TIN TÀI KHOẢN</h4>
					<p>Họ tên: ...</p> {/* Truyền dữ liệu từ db*/}
					<p>Email: ...</p> {/* Truyền dữ liệu từ db*/}
				</div>
			</div>
		</div>
	);
};

export default Account;
