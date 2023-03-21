import React from 'react';
import './scss/contact.scss';

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact-image'>
				<img src='//bizweb.dktcdn.net/100/396/362/themes/777022/assets/contact_bg.jpg?1678155521674' alt='' />
				<h1 className='text-center'>Liên hệ</h1>
			</div>
			<div className='container contact-page'>
				<div className='row contact-padding'>
					<div className='col-lg-6 col-md-6 col-sm-12 support mt-3'>
						<p className='p-top support1'>Ant-home</p>
						<h3>Bạn có câu hỏi nào?</h3>
						<p className='p-bottom'>
							Ant Home cam kết cung cấp giải pháp thương mại điện tử với trải nghiệm mua sắm tốt nhất cho
							người tiêu dùng trong định hình phong cách sống hiện đại và mua sắm nội thất tại Việt Nam. Mọi
							thông tin liên hệ xin gửi vào form dưới đây hoặc liên hệ chúng tôi theo địa chỉ.
						</p>
						<div className='contact-box'>
							<p>
								<strong>Địa chỉ: </strong>
								70 Lu Gia, Ward 15, District 11, Ho Chi Minh City
							</p>
							<p>
								<strong>Điện thoại: </strong>
								1900 6750
							</p>
							<p>
								<strong>Email: </strong>
								support@sapo.vn
							</p>
						</div>
					</div>
					<div className='col-lg-6 col-md-6 col-sm-12 mt-3'>
						<div className='row'>
							<div className='col-sm-6 col-xs-12'>
								<fieldset className='form-group'>
									<label htmlFor=''>
										Họ và tên
										<span className='required'>*</span>
										<input
											placeholder='Nhập họ và tên'
											type='text'
											name='contact[name]'
											id='name'
											className='form-control form-control-lg'
										/>
									</label>
								</fieldset>
							</div>
							<div className='col-sm-6 col-xs-12'>
								<fieldset className='form-group'>
									<label htmlFor=''>
										Email
										<span className='required'>*</span>
										<input
											placeholder='Nhập địa chi email'
											type='email'
											name='contact[email]'
											id='email'
											className='form-control form-control-lg'
										/>
									</label>
								</fieldset>
							</div>
							<div className='col-sm-12 col-xs-12'>
								<fieldset className='form-group'>
									<label htmlFor=''>
										Điện thoại
										<span className='required'>*</span>
										<input
											placeholder='Nhập số điện thoại'
											type='tel'
											name='contact[phone]'
											id='tel'
											className='number-phone form-control form-control-lg'
										/>
									</label>
								</fieldset>
							</div>
							<div className='col-sm-12 col-xs-12'>
								<fieldset className='form-group'>
									<label htmlFor=''>
										Nội dung
										<span className='required'>*</span>
									</label>
									<textarea
										placeholder='Nội dung liên hệ'
										className='form-control form-control-lg'
										name='contact[body]'
										id='comment'
										cols='30'
										rows='5'
									></textarea>
								</fieldset>
								<fieldset className='form-group '>
									<button className='btn ' type='submit'>
										Gửi tin nhắn
									</button>
								</fieldset>
							</div>
						</div>
					</div>
				</div>
				<div className='container contact-list-store mt-4'>
					<div className='row'>
						<div className='col-lg-3 col-md-3 col-sm-6 col-8 item-contact-store'>
							<div className='item-contact-store-img'>
								<img
									src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/contact_store_1.jpg?1678155521674'
									alt=''
								/>
							</div>
							<div className='item-contact-store-infor mt-3'>
								<h5>ANT HOME TÂN PHÚ</h5>
								<p>175 Lý Thường Kiệt, Phường 6, Quận Tân Phú, TP Hồ Chí Minh</p>
								<p>
									{' '}
									<a href='tel:0222456789'>0222 456 789</a>
								</p>
								<p>
									{' '}
									<a href='mailto:baotrung304@gmail.com'>baotrung304@gmail.com</a>
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-3 col-sm-6 col-8 item-contact-store'>
							<div className='item-contact-store-img'>
								<img
									src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/contact_store_2.jpg?1678155521674'
									alt=''
								/>
							</div>
							<div className='item-contact-store-infor mt-3'>
								<h5>ANT HOME ĐÀ NẴNG</h5>
								<p>175 Lý Thường Kiệt, Phường 6, Quận Tân Phú, TP Hồ Chí Minh</p>
								<p>
									{' '}
									<a href='tel:0222456789'>0222 456 789</a>
								</p>
								<p>
									{' '}
									<a href='mailto:baotrung304@gmail.com'>baotrung304@gmail.com</a>
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-3 col-sm-6 col-8 item-contact-store'>
							<div className='item-contact-store-img'>
								<img
									src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/contact_store_3.jpg?1678155521674'
									alt=''
								/>
							</div>
							<div className='item-contact-store-infor mt-3'>
								<h5>ANT HOME NHA TRANG</h5>
								<p>175 Lý Thường Kiệt, Phường 6, Quận Tân Phú, TP Hồ Chí Minh</p>
								<p>
									{' '}
									<a href='tel:0222456789'>0222 456 789</a>
								</p>
								<p>
									{' '}
									<a href='mailto:baotrung304@gmail.com'>baotrung304@gmail.com</a>
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-3 col-sm-6 col-8 item-contact-store'>
							<div className='item-contact-store-img'>
								<img
									src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/contact_store_4.jpg?1678155521674'
									alt=''
								/>
							</div>
							<div className='item-contact-store-infor mt-3'>
								<h5>ANT HOME ĐÀ LẠT</h5>
								<p>175 Lý Thường Kiệt, Phường 6, Quận Tân Phú, TP Hồ Chí Minh</p>
								<p>
									{' '}
									<a href='tel:0222456789'>0222 456 789</a>
								</p>
								<p>
									{' '}
									<a href='mailto:baotrung304@gmail.com'>baotrung304@gmail.com</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
};
export default Contact;
