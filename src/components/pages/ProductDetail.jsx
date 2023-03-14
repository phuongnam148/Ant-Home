import React, { useState } from 'react';
import './scss/product-detail.scss';

const ProductDetail = () => {
	const [value, setValue] = useState(1);

	const handleIncrement = () => {
		setValue(value + 1);
	};

	const handleDecrement = () => {
		if (value > 1) {
			setValue(value - 1);
		}
	};

	// eslint-disable-next-line no-unused-vars
	const handleSubmit = (event) => {
		event.preventDefault(); // Ngăn chặn gửi dữ liệu và tải lại trang mặc định
	};
	//xem thêm
	// eslint-disable-next-line no-unused-vars
	const [productDetail, setProductDetail] = useState(
		'Mô tả chi tiết sản phẩm Mô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩmMô tả chi tiết sản phẩm	'
	);
	const [showMore, setShowMore] = useState(false);

	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	return (
		// Thanh breadcrumb
		<div className='productDetail'>
			<div className='container-lg'>
				<nav aria-label='breadcrumb'>
					<ol className='breadcrumb'>
						<li className='breadcrumb-item'>
							<a href='#'>Trang chủ</a>
						</li>
						<li className='breadcrumb-item active' aria-current='page'>
							Bàn
						</li>
					</ol>
				</nav>
				<div className='mt-2 row'>
					{/* <div className='col-12 col-xl-6'>
						<div className='d-flex flex-column flex-md-row-reverse'>
							<div className='col-12 col-md-8'>
								<div>
									<img
										className='img-fluid'
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/da0045c9e48defd093797dfc83fa2c67-1590389087.jpg?v=1595556715920'
										alt=''
									/>
								</div>
								<div className='text-center'>
									<i className='fa-solid fa-magnifying-glass me-2'></i>
									<span>Click chuột lên hình để phóng to</span>
								</div>
							</div>
							<div className='col-12 col-md-4'>
								<div className='list-group img-product'>
									<div href='#' className='list-group-item list-group-item-action'>
										<img
											className='img-fluid'
											src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/z1404288110190-af6a21b6662a892b18ddb3ea9f7795fc-1595478380.jpg?v=1595556722557'
											alt=''
										/>
									</div>
									<div href='#' className='list-group-item list-group-item-action'>
										<img
											className='img-fluid'
											src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/z1404288110190-af6a21b6662a892b18ddb3ea9f7795fc-1595478380.jpg?v=1595556722557'
											alt=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					<div className='row col-12 col-xl-6'>
						<div className='col-2'>
							<div className='list-group img-product' id='list-tab' role='tablist'>
								<a
									className='list-group-item list-group-item-action active'
									id='list-home-list'
									data-bs-toggle='list'
									href='#list-home'
									role='tab'
									aria-controls='list-home'
								>
									<img
										className='w-100'
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/z1404288110190-af6a21b6662a892b18ddb3ea9f7795fc-1595478380.jpg?v=1595556722557'
										alt=''
									/>
								</a>
								<a
									className='list-group-item list-group-item-action'
									id='list-profile-list'
									data-bs-toggle='list'
									href='#list-profile'
									role='tab'
									aria-controls='list-profile'
								>
									<img
										className='w-100'
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/z1404288110190-af6a21b6662a892b18ddb3ea9f7795fc-1595478380.jpg?v=1595556722557'
										alt=''
									/>
								</a>
								<a
									className='list-group-item list-group-item-action'
									id='list-messages-list'
									data-bs-toggle='list'
									href='#list-messages'
									role='tab'
									aria-controls='list-messages'
								>
									<img
										className='w-100'
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/da0045c9e48defd093797dfc83fa2c67-1590389087.jpg?v=1595556715920'
										alt=''
									/>
								</a>
							</div>
						</div>
						<div className='col-10'>
							<div className='tab-content' id='nav-tabContent'>
								<div
									className='tab-pane fade show active'
									id='list-home'
									role='tabpanel'
									aria-labelledby='list-home-list'
								>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/da0045c9e48defd093797dfc83fa2c67-1590389087.jpg?v=1595556715920'
										alt=''
									/>
								</div>
								<div
									className='tab-pane fade'
									id='list-profile'
									role='tabpanel'
									aria-labelledby='list-profile-list'
								>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/da0045c9e48defd093797dfc83fa2c67-1590389087.jpg?v=1595556715920'
										alt=''
									/>
								</div>
								<div
									className='tab-pane fade'
									id='list-messages'
									role='tabpanel'
									aria-labelledby='list-messages-list'
								>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/z1404288110190-af6a21b6662a892b18ddb3ea9f7795fc-1595478380.jpg?v=1595556722557'
										alt=''
									/>
								</div>
								<div
									className='tab-pane fade'
									id='list-settings'
									role='tabpanel'
									aria-labelledby='list-settings-list'
								>
									...
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-xl-6'>
						<div className='fw-semibold'>
							<h3>Bộ 2 Bàn Sofa IGEA Việt Nam Phong Cách Scanvadian Màu Trắng</h3>
						</div>
						<div className='d-flex justify-content-between'>
							<div className='trademark-product'>
								<p>Thương hiệu: IGEA Việt Nam</p>
							</div>
							<div className='code-product'>
								<p>Mã sản phẩm: 290050037302</p>
							</div>
						</div>
						<hr />
						<div className='fw-semibold'>
							<p className='gia'>569.000₫</p>
						</div>
						<hr />
						<form action='' className='' onSubmit={handleSubmit}>
							<div className=''>
								<label htmlFor='exampleColorInput' className='form-label fw-semibold'>
									Màu sắc
								</label>
								<div className='vang'></div>
								<div className='do'></div>
							</div>
							<div className='material-product'>
								<div className='fw-semibold'>
									<p>Chất liệu</p>
								</div>
								<label htmlFor='' className='p-1'>
									Gỗ công nghiệp
								</label>
							</div>
							<button className='giam' type='button' onClick={handleDecrement}>
								-
							</button>
							<input
								disabled
								className='soluong'
								type='number'
								min='1'
								value={value}
								onChange={(event) => setValue(event.target.value)}
							/>
							<button className='giam me-3' type='button' onClick={handleIncrement}>
								+
							</button>
							<button className='addsp' type='submit'>
								Thêm vào giỏ
							</button>
						</form>
						{/* Sp yêu thích */}
						<div className='tym'>
							<i className='fa-regular fa-heart me-2 my-3'></i>
							<span>Thêm vào yêu thích</span>
						</div>
						{/* Thông tin chi tiết */}
						<div>
							<p className={!showMore ? 'show-more' : ''}>{productDetail}</p>
							{<button onClick={handleShowMore}>Xem thêm </button>}
							{<button onClick={() => setShowMore(true)}>Thu gọn</button>}
						</div>
					</div>
				</div>
			</div>
			<hr />
			{/* Thông tin chi tiết sản phẩm */}
			<div className='container'>
				<div className='justify-content-center'>
					<ul className='nav nav-tabs justify-content-center' id='myTab' role='tablist'>
						<li className='nav-item' role='presentation'>
							<button
								className='nav-link active'
								id='home-tab'
								data-bs-toggle='tab'
								data-bs-target='#home-tab-pane'
								type='button'
								role='tab'
								aria-controls='home-tab-pane'
								aria-selected='true'
							>
								Mô tả sản phẩm
							</button>
						</li>
						<li className='nav-item' role='presentation'>
							<button
								className='nav-link'
								id='profile-tab'
								data-bs-toggle='tab'
								data-bs-target='#profile-tab-pane'
								type='button'
								role='tab'
								aria-controls='profile-tab-pane'
								aria-selected='false'
							>
								Thông số
							</button>
						</li>
						<li className='nav-item' role='presentation'>
							<button
								className='nav-link'
								id='contact-tab'
								data-bs-toggle='tab'
								data-bs-target='#contact-tab-pane'
								type='button'
								role='tab'
								aria-controls='contact-tab-pane'
								aria-selected='false'
							>
								Hướng dẫn bảo quản
							</button>
						</li>
					</ul>
					<div className='tab-content' id='myTabContent'>
						<div
							className='tab-pane fade show active '
							id='home-tab-pane'
							role='tabpanel'
							aria-labelledby='home-tab'
							tabIndex={0}
						>
							<span className='fw-bold'>Sản phẩm chỉ bao gồm 1 bàn 1 ghế, không kèm các phụ kiện khác</span>
							<ul>
								<li>Sản phẩm thân thiện với môi trường</li>
								<li>Sản phẩm đạt tiêu chuẩn xuất khẩu, đóng gói theo chuẩn xuất khẩu</li>
								<li>Chất liệu: Gỗ MDF đạt tiêu chuẩn E1 nhập khẩu Singapore được phủ Melamine chống thấm</li>
								<li>Đã qua xử lí chống cong vênh, mối mọt</li>
								<li>Khó trầy xước, những vết xước nhẹ sẽ không ảnh hưởng đến sản phẩm</li>
								<li>Thiết kế thông minh, tinh tế sang trọng</li>
								<li>Kích thước: Ngang x Sâu x Cao(cm): 715 x 40 x 136.5</li>
								<li>Lắp đặt đơn giản (có hướng dẫn lắp đặt đính kèm)</li>
							</ul>
						</div>
						<div
							className='tab-pane fade'
							id='profile-tab-pane'
							role='tabpanel'
							aria-labelledby='profile-tab'
							tabIndex={0}
						>
							<span className='fw-bold'>Anthome</span> là sàn thương mại điện tử chuyên cung cấp các sản phẩm
							nội thất và trang trí nội thất cho thị trường Việt Nam. Chúng tôi tin rằng hạnh phúc của mỗi gia
							đình đều được vun đắp từ nhà, không gian sống tạo dựng giá trị cuộc sống. Chính vì vậy mục tiêu,
							sứ mệnh mà <span className='fw-bold'> Ant Home</span> hướng tới là đem đến những giải pháp tối
							ưu về nội thất cho nhà ở, văn phòng… Với con đường mà Ant Home đã chọn, chúng tôi mong muốn được
							cùng xây tổ ấm với triệu gia đình Việt đồng thời cùng chung tay kiến tạo không gian làm việc
							chuyên nghiệp với các doanh nghiệp tại Việt Nam.
							<img
								src='https://bizweb.dktcdn.net/100/396/362/files/baya-service-01.jpg?v=1595211750325'
								alt=''
							/>
							<h4>GIÁ TRỊ</h4>
							<h6>
								{' '}
								<i>VÌ KHÁCH HÀNG</i>{' '}
							</h6>
							<p>Mang đến những sản phẩm và dịch vụ tốt nhất cho mỗi khách hàng.</p>
							<h6>
								{' '}
								<i>CHÍNH TRỰC</i>{' '}
							</h6>
							<p>
								Luôn lựa chọn giải pháp tối ưu nhất cho khách hàng, nhân viên, đối tác và cộng đồng xung
								quanh.
							</p>
							<h6>
								{' '}
								<i>CHẤT LƯỢNG</i>{' '}
							</h6>
							<p>Không ngừng theo đuổi những tiêu chuẩn chất lượng khắt khe trong mọi quy trình.</p>
							<h6>
								{' '}
								<i>TÔN TRỌNG</i>{' '}
							</h6>
							<p>
								Hướng tới trải nghiệm mua sắm và môi trường làm việc không có sự phân biệt đối xử dưới mọi
								hình thức.
							</p>
							<h6>
								{' '}
								<i>TINH THẦN ĐỒNG ĐỘI</i>{' '}
							</h6>
							<p>
								Sẵn sàng đồng hành cùng khách hàng, đồng nghiệp và nhà cung cấp để đạt tới những kết quả tốt
								nhất.
							</p>
							<h6>
								{' '}
								<i>CẢI TIẾN KHÔNG NGỪNG</i>{' '}
							</h6>
							<p>Không bao giờ tự hài lòng, chúng tôi sẽ luôn không ngừng phát triển bản thân.</p>
						</div>
					</div>
					<div
						className='tab-pane fade'
						id='contact-tab-pane'
						role='tabpanel'
						aria-labelledby='contact-tab'
						tabIndex={0}
					>
						<span className='fw-bold'>Ant Home</span> là sàn thương mại điện tử chuyên cung cấp các sản phẩm
						nội thất và trang trí nội thất cho thị trường Việt Nam. Chúng tôi tin rằng hạnh phúc của mỗi gia
						đình đều được vun đắp từ nhà, không gian sống tạo dựng giá trị cuộc sống. Chính vì vậy mục tiêu,
						sứ mệnh mà <span className='fw-bold'>Ant Home</span> hướng tới là đem đến những giải pháp tối ưu
						về nội thất cho nhà ở, văn phòng… Với con đường mà Ant Home đã chọn, chúng tôi mong muốn được cùng
						xây tổ ấm với triệu gia đình Việt đồng thời cùng chung tay kiến tạo không gian làm việc chuyên
						nghiệp với các doanh nghiệp tại Việt Nam.
						<img
							src='https://bizweb.dktcdn.net/100/396/362/files/baya-service-01.jpg?v=1595211750325'
							alt=''
						/>
						<h4>GIÁ TRỊ</h4>
						<h6>
							{' '}
							<i>VÌ KHÁCH HÀNG</i>{' '}
						</h6>
						<p>Mang đến những sản phẩm và dịch vụ tốt nhất cho mỗi khách hàng.</p>
						<h6>
							{' '}
							<i>CHÍNH TRỰC</i>{' '}
						</h6>
						<p>
							Luôn lựa chọn giải pháp tối ưu nhất cho khách hàng, nhân viên, đối tác và cộng đồng xung quanh.
						</p>
						<h6>
							{' '}
							<i>CHẤT LƯỢNG</i>{' '}
						</h6>
						<p>Không ngừng theo đuổi những tiêu chuẩn chất lượng khắt khe trong mọi quy trình.</p>
						<h6>
							{' '}
							<i>TÔN TRỌNG</i>{' '}
						</h6>
						<p>
							Hướng tới trải nghiệm mua sắm và môi trường làm việc không có sự phân biệt đối xử dưới mọi hình
							thức.
						</p>
						<h6>
							{' '}
							<i>TINH THẦN ĐỒNG ĐỘI</i>{' '}
						</h6>
						<p>
							Sẵn sàng đồng hành cùng khách hàng, đồng nghiệp và nhà cung cấp để đạt tới những kết quả tốt
							nhất.
						</p>
						<h6>
							{' '}
							<i>CẢI TIẾN KHÔNG NGỪNG</i>{' '}
						</h6>
						<p>Không bao giờ tự hài lòng, chúng tôi sẽ luôn không ngừng phát triển bản thân.</p>
					</div>
				</div>
			</div>
			{/* Sản phẩm bạn vừa xem */}
			<div className='product-new'>
				<h2 className='fw-bold'>Sản phẩm bạn vừa xem</h2>
			</div>
		</div>
	);
};

export default ProductDetail;
