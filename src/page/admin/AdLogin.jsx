import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import '../../scss/AdLogin.scss';

const AdLogin = () => {
	const navigate = useNavigate();
	//
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});

	// Lấy địa chỉ Email
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	// Lấy Password
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	// //Validate
	// const validateForm = () => {
	// 	let formErrors = {};
	// 	let isValid = true;

	// 	//Validate username
	// 	if (!email) {
	// 		formErrors.username = 'Nhập email vào';
	// 		isValid = false;
	// 	} else if (!/\S+@\S+\.\S+/.test(email)) {
	// 		formErrors.username = 'Email phải đúng định dạng ';
	// 		isValid = false;
	// 	}

	// 	//Validate password
	// 	if (!password) {
	// 		formErrors.password = 'Nhập mật khẩu vào';
	// 		isValid = false;
	// 	} else if (password.length < 8) {
	// 		formErrors.password = 'Mật khẩu có ít nhất 8 ký tự';
	// 		isValid = false;
	// 	}

	// 	setErrors(formErrors);

	// 	return isValid;
	// };

	// const handleLogin = async (event) => {
	// 	event.preventDefault();
	// 	if (validateForm()) {
	// 		try {
	// 			const user = { email, password };
	// 			await newRequest
	// 				.post('', user)
	// 				.then((res) => {
	// 					if (res.data.role == 'qtv' || res.data.role == 'ctv') {
	// 						navigate('/admin');
	// 					} else {
	// 						navigate('/account');
	// 					}
	// 					console.log(res.data.message);
	// 				})
	// 				.catch((error) => console.log(error));

	// 			// <Navigate to='/account' />;
	// 			// eslint-disable-next-line no-unused-vars
	// 		} catch (error) {
	// 			alert(error.response.data.message);
	// 		}
	// 	} else {
	// 		alert('Nhập lại form đi');
	// 	}
	return (
		<div className='login'>
			<h1>Welcome to GachaShop Admin</h1>
			<div className='login-container container m-auto row'>
				<div className='left col'>
					<div className='account-policy-title'>ĐĂNG NHẬP TRANG QUẢN LÍ CỦA GACHASHOP</div>
					{/* <div className='account-policy-content'>
						<p>Mua hàng khắp thế giới cực dễ dàng, nhanh chóng</p>
						<p>Theo dõi chi tiết đơn hàng, địa chỉ thanh toán dễ dàng</p>
						<p>Nhận nhiều chương trình ưu đãi hấp dẫn từ chúng tôi</p>
					</div> */}
				</div>
				<div className='right col'>
					<ul className='auth-menu-list d-flex'>
						<li className='loginform active'>
							<Link to='#'>Đăng nhập</Link>
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
								value={email}
								onChange={handleEmailChange}
							/>
							{errors.username && <span>{errors.username}</span>}
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
								value={password}
								onChange={handlePasswordChange}
							/>
							{errors.password && <span>{errors.password}</span>}
						</div>
						<p className='recover'>
							<a href='' className='btn-link-style'>
								Quên mật khẩu?
							</a>
						</p>
						<button type='submit' className='btn'>
							Đăng nhập
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdLogin;
