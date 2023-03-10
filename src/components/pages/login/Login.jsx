import React from 'react';

const Login = () => {
	return (
		<div className='login'>
			<div className='login-container'>
				<div className='left'>
					<img
						src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/account-banner.jpg?1629467502394'
						alt=''
					/>
				</div>
				<div className='rigtn'>
					<div className='dangky-dangnhap'>
						<div className='dangky'>Đăng Ký</div>
						<div className='dangnhap'>Đăng nhập</div>
					</div>
					<label htmlFor='femail'>Email*</label>
					<input placeholder='Nhập địa chỉ Email' type='text' id='fname' name='fname' />
					<label htmlFor='fmatkhau'>Mật Khẩu*</label>
					<input placeholder='Nhập mật khẩu' type='text' id='fname' name='fname' />
					<label htmlFor='quenmatkhau'>Quên mật khẩu</label>
					<button>Đăng Nhập</button>
					<a>
						{' '}
						Ant Home cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự đồng ý
						của bạn.
					</a>
					<div className='fb-gg'>
						<span>Hoặc đăng nhập qua</span>
					</div>
					<div className='fb'>
						<img
							width='192px'
							height='38px'
							src='https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg'
							alt='fb-login-button'
						/>
					</div>
					<div className='google'>
						<img
							width='192px'
							height='38px'
							src='https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg'
							alt='google-login-button	'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
