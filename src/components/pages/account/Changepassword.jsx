import React from 'react';

const Changepassword = () => {
	<div className='account container'>
		<div className='row'>
			<div className='account-nav col-3'>
				<div className='nav-side'>
					<h4>TRANG TÀI KHOẢN</h4>
					<p>Xin chào,...</p> {/* Truyền dữ liệu từ db*/}
					<ul className='list-unstyled'>
						<li>
							<a href='' className='title-info active'>
								Thông tin tài khoản!
							</a>
						</li>
						<li>
							<a href='' className='title-info'>
								Đơn hàng của bạn
							</a>
						</li>
						<li>
							<a href='' className='title-info'>
								Đổi mật khẩu
							</a>
						</li>
						<li>
							<a href='' className='title-info'>
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
				<h4>ĐỔI MẬT KHẨU</h4>
				<p>Để đảm bảo tính bảo mật vui lòng đặt mật khẩu ít nhất 8 kí tự</p> {/* Truyền dữ liệu từ db*/}
				<form>
					<div className='mb-3'>
						<label className='form-label'>Email address</label>
						<input
							type='email'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
						/>
					</div>
					<div className='mb-3'>
						<label className='form-label'>Password</label>
						<input type='password' className='form-control' id='exampleInputPassword1' />
					</div>
					<div className='mb-3 form-check'>
						<input type='checkbox' className='form-check-input' id='exampleCheck1' />
						<label className='form-check-label'>Check me out</label>
					</div>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</div>
	</div>;
};

export default Changepassword;
