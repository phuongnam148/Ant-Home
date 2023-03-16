import React from 'react';
import './Login.scss';

const Register = () => {
	return (
		<div className='login'>
			<div className='login-container row'>
				<div className='left col'>
					<div className='account-policy-title'>QUYỀN LỢI THÀNH VIÊN</div>
					<div className='account-policy-content'>
						<p>Mua hàng khắp thế giới cực dễ dàng, nhanh chóng</p>
						<p>Theo dõi chi tiết đơn hàng, địa chỉ thanh toán dễ dàng</p>
						<p>Nhận nhiều chương trình ưu đãi hấp dẫn từ chúng tôi</p>
					</div>
				</div>
				<div className='right col'>
					<ul className='auth-menu-list d-flex'>
						<li className='loginform '>
							<a href='/login'>Đăng nhập</a>
						</li>
						<li className='regisform active'>
							<a href='#'>Đăng kí</a>
						</li>
					</ul>
					<form method='post' id='customer-name'>
						<div className='mb-3'>
							<label htmlFor='InputFName' className='form-label'>
								HỌ <span>*</span>
							</label>
							<input type='text' className='form-control' id='InputFName' placeholder='Nhập Họ' required />
						</div>
						<div className='mb-3'>
							<label htmlFor='InputName' className='form-label'>
								TÊN <span>*</span>
							</label>
							<input type='text' className='form-control' id='InputName' placeholder='Nhập Tên' required />
						</div>
						<div className='mb-3'>
							<label htmlFor='phone' className='form-label'>
								SỐ ĐIỆN THOẠI <span>*</span>
							</label>
							<input
								type='tel'
								className='form-control'
								id='phone'
								placeholder='Nhập Số điện thoại'
								required
								pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='InputEmail' className='form-label'>
								Email <span>*</span>
							</label>
							<input
								type='email'
								className='form-control'
								id='InputEmail'
								placeholder='Nhập Địa chỉ Email'
								required
								aria-describedby='emailHelp'
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$'
							/>
							<div id='emailHelp' className='form-text'></div>
						</div>
						<div className='mb-3'>
							<label htmlFor='InputPassword' className='form-label'>
								Mật khẩu <span>*</span>
							</label>
							<input
								type='password'
								className='form-control'
								id='InputPassword'
								placeholder='Nhập Mật khẩu'
								required
							/>
						</div>

						<button type='submit' className='btn'>
							Tạo tài khoản
						</button>
					</form>
					<div className='line-break'>
						<span>hoặc đăng nhập qua</span>
					</div>

					<div className='social-login row row-cols-2 my-4'>
						<a href='' className='fb-login col'>
							<img
								width='192px'
								height='38px'
								src='https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg'
								alt='fb-login-button'
							/>
						</a>
						<a href='' className='gg-login col '>
							<img
								width='192px'
								height='38px'
								src='https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg'
								alt='google-login-button	'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
