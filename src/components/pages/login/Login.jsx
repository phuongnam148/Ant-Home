import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
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
						<li className='loginform active'>
							<Link to='/login'>Đăng nhập</Link>
						</li>
						<li className='regisform'>
							<Link to='/register'>Đăng kí</Link>
						</li>
					</ul>
					<form method='post' id='customer-login'>
						<div className='mb-3'>
							<label htmlFor='InputEmail' className='form-label'>
								Email <span>*</span>
							</label>
							<input
								type='email'
								className='form-control'
								id='InputEmail'
								placeholder='Nhập Địa chỉ Email'
								aria-describedby='emailHelp'
								required
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$'
								data-validation-error-msg='Email sai định dạng'
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
						<p className='recover'>
							<a href='' className='btn-link-style'>
								Quên mật khẩu?
							</a>
						</p>
						<button type='submit' className='btn'>
							Đăng nhập
						</button>
						<p className='login-note'>
							Ant Home cam kết bảo mật và sẽ không bao giờ đăng <br /> hay chia sẻ thông tin mà chưa có được
							sự đồng ý của bạn.
						</p>
					</form>
					<div className='line-break'>
						<span>hoặc đăng nhập qua</span>
					</div>

					<div className='social-login row row-cols-2'>
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

export default Login;
