/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './scss/product-detail.scss';
import Slide from '../Slide/Slide';
import { useLocation } from 'react-router-dom';

// Import thêm redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductByID } from '../../redux/productSlide.js';

const ProductDetail = () => {
	const [showMore, setShowMore] = useState(false);
	// Lấy ID Sản phẩm trên URL
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);
	const id = queryParams.get('id');
	// Lấy dữ liệu từ Store
	const dispatch = useDispatch();
	const productDataId = useSelector((state) => state.product.selectedProduct);
	// eslint-disable-next-line no-unused-vars
	const status = useSelector((state) => state.product.status);
	// Lấy data products
	useEffect(() => {
		dispatch(getProductByID(id));
	}, [dispatch, id]);
	// Check data Products
	// console.log(productDataId);
	// Format tiền VND
	const VND = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	});

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
	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	// Check điều kiện status trả về
	if (status === 'loading') {
		return <div>Loading...</div>;
	}
	if (status === 'failed') {
		return <div>Error: {error}</div>;
	}
	if (!productDataId) {
		return null;
	}

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
							<h3>{productDataId.name_prod}</h3>
						</div>
						<div className='d-flex justify-content-between'>
							<div className='trademark-product'>
								<p>Thương hiệu: {productDataId.Brand.name_brand}</p>
							</div>
							<div className='code-product'>
								<p>Mã sản phẩm: 290050037302</p>
							</div>
						</div>
						<hr />
						<div className='fw-semibold'>
							<p className='gia'>{VND.format(productDataId.price_prod)}</p>
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
						<div className='showmore'>
							<p className={!showMore ? 'show-more' : ''}>{productDataId.DetailProduct.detail_prod}</p>

							<button className='xemthem' onClick={handleShowMore}>
								<p className='more-text m-1'>{showMore ? 'Thu gọn' : 'Xem thêm'}</p>
								<i className='fa fa-angle-down '></i>
							</button>

							{/* {<button onClick={() => setShowMore(true)}>Rút gọn</button>} */}
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className='container'>
				<div className='d-flex justify-content-center'>
					<nav>
						<div className='nav nav-tabs' id='nav-tab' role='tablist'>
							<button
								className='nav-link active'
								id='nav-home-tab'
								data-bs-toggle='tab'
								data-bs-target='#nav-home'
								type='button'
								role='tab'
								aria-controls='nav-home'
								aria-selected='true'
							>
								Mô tả sản phẩm
							</button>
							<button
								className='nav-link'
								id='nav-profile-tab'
								data-bs-toggle='tab'
								data-bs-target='#nav-profile'
								type='button'
								role='tab'
								aria-controls='nav-profile'
								aria-selected='false'
							>
								Thông số
							</button>
							<button
								className='nav-link'
								id='nav-contact-tab'
								data-bs-toggle='tab'
								data-bs-target='#nav-contact'
								type='button'
								role='tab'
								aria-controls='nav-contact'
								aria-selected='false'
							>
								Hướng dẫn bảo quản
							</button>
						</div>
					</nav>
				</div>

				<div className='tab-content' id='nav-tabContent'>
					<div
						className='tab-pane fade show active'
						id='nav-home'
						role='tabpanel'
						aria-labelledby='nav-home-tab'
					>
						<p className='fw-bold'>{productDataId.prod}</p>
						<p>
							{' '}
							Bạn đang cần tìm bàn trà sofa, bàn trà cafe mà chưa tìm được sản phẩm ưng ý
							<br />
							Bạn muốn sở hữu mẫu bàn trà sofa hiện đại trẻ trung tiết kiệm diện tích, dễ dàng kết hợp nội
							thất đặc biệt là ghế sofa.
							<br />
							Bạn muốn sở hữu mẫu bàn trà cafe có kích thước hợp lý có thế làm tag đầu giường bàn học, bàn làm
							việc, bàn uống trà thư giãn tại không gian bạn yêu thích.
							<br />
							Bàn cần tìm sản phầm bàn trà sofa độc đáo để tặng quà tân gia.
							<br />
							Nhưng bàn trà sofa bạn cần phải có giá thành hợp lý và chất lượng.
							<br />
							Nhưng bàn trà sofa bạn cần phải có giá thành hợp lý và chất lượng.
							<br />
							THÔNG TIN CHI TIẾT
							<br />
							- Kích thước: Bàn trứng (90x50x42cm), bàn tròn (50x50x45cm).
							<br />
							- Màu sắc: Trắng.
							<br />
							- Chất liệu: Mặt bàn gỗ MDF phủ melamin chống xước chống nước. Chân gỗ sồi tự nhiên.
							<br />
							- Chất liệu: Mặt bàn gỗ MDF phủ melamin chống xước chống nước. Chân gỗ sồi tự nhiên.
							<br />- Công năng: Bàn trà cafe tại nhà tại văn phòng, bàn.
						</p>
					</div>
					<div className='tab-pane fade' id='nav-profile' role='tabpanel' aria-labelledby='nav-profile-tab'>
						<p>
							<b>Ant home</b>là sàn thương mại điện tử chuyên cung cấp các sản phẩm nội thất và trang trí nội
							thất cho thị trường Việt Nam. Chúng tôi tin rằng hạnh phúc của mỗi gia đình đều được vun đắp từ
							nhà, không gian sống tạo dựng giá trị cuộc sống. Chính vì vậy mục tiêu, sứ mệnh <b>Ant home</b>{' '}
							hướng tới là đem đến những giải pháp tối ưu về nội thất cho nhà ở, văn phòng… Với con đường mà
							Ant Home đã chọn, chúng tôi mong muốn được cùng xây tổ ấm với triệu gia đình Việt đồng thời cùng
							chung tay kiến tạo không gian làm việc chuyên nghiệp với các doanh nghiệp tại Việt Nam.
						</p>
						<p>
							<img
								src='https://bizweb.dktcdn.net/100/396/362/files/baya-service-01.jpg?v=1595211750325'
								alt=''
							/>
						</p>
						<h4>
							<strong>GIÁ TRỊ</strong>
						</h4>
						<p>
							<em>
								<strong>VÌ KHÁCH HÀNG</strong>
							</em>
						</p>
						<p>Mang đến những sản phẩm và dịch vụ tốt nhất cho mỗi khách hàng.</p>
						<p>
							<em>
								<strong>CHÍNH TRỰC</strong>
							</em>
						</p>
						<p>
							Luôn lựa chọn giải pháp tối ưu nhất cho khách hàng, nhân viên, đối tác và cộng đồng xung quanh.
						</p>
						<p>
							<em>
								<strong>CHẤT LƯỢNG</strong>
							</em>
						</p>
						<p>Không ngừng theo đuổi những tiêu chuẩn chất lượng khắt khe trong mọi quy trình.</p>
						<div>
							<p>
								<em>
									<strong>TÔN TRỌNG</strong>
								</em>
							</p>
							<p>
								Sẵn sàng đồng hành cùng khách hàng, đồng nghiệp và nhà cung cấp để đạt tới những kết quả tốt
								nhất.
							</p>
						</div>
						<div>
							<p>
								<em>
									<strong>TING THẦN ĐỒNG ĐỘI</strong>
								</em>
							</p>
							<p>
								Sẵn sàng đồng hành cùng khách hàng, đồng nghiệp và nhà cung cấp để đạt tới những kết quả tốt
								nhất.
							</p>
						</div>
						<p>
							<em>
								<strong>CẢI TIẾN KHÔNG NGỪNG</strong>
							</em>
						</p>
						<p>
							Hướng tới trải nghiệm mua sắm và môi trường làm việc không có sự phân biệt đối xử dưới mọi hình
							thức.
						</p>
					</div>
					<div className='tab-pane fade' id='nav-contact' role='tabpanel' aria-labelledby='nav-contact-tab'>
						<p>
							<b>Ant home</b>là sàn thương mại điện tử chuyên cung cấp các sản phẩm nội thất và trang trí nội
							thất cho thị trường Việt Nam. Chúng tôi tin rằng hạnh phúc của mỗi gia đình đều được vun đắp từ
							nhà, không gian sống tạo dựng giá trị cuộc sống. Chính vì vậy mục tiêu, sứ mệnh <b>Ant home</b>{' '}
							hướng tới là đem đến những giải pháp tối ưu về nội thất cho nhà ở, văn phòng… Với con đường mà
							Ant Home đã chọn, chúng tôi mong muốn được cùng xây tổ ấm với triệu gia đình Việt đồng thời cùng
							chung tay kiến tạo không gian làm việc chuyên nghiệp với các doanh nghiệp tại Việt Nam.
						</p>
						<p>
							<img
								src='https://bizweb.dktcdn.net/100/396/362/files/baya-service-01.jpg?v=1595211750325'
								alt=''
							/>
						</p>
						<h4>
							<strong>GIÁ TRỊ</strong>
						</h4>
						<p>
							<em>
								<strong>VÌ KHÁCH HÀNG</strong>
							</em>
						</p>
						<p>Mang đến những sản phẩm và dịch vụ tốt nhất cho mỗi khách hàng.</p>
						<p>
							<em>
								<strong>CHÍNH TRỰC</strong>
							</em>
						</p>
						<p>
							Luôn lựa chọn giải pháp tối ưu nhất cho khách hàng, nhân viên, đối tác và cộng đồng xung quanh.
						</p>
						<p>
							<em>
								<strong>CHẤT LƯỢNG</strong>
							</em>
						</p>
						<p>Không ngừng theo đuổi những tiêu chuẩn chất lượng khắt khe trong mọi quy trình.</p>
						<div>
							<p>
								<em>
									<strong>TÔN TRỌNG</strong>
								</em>
							</p>
							<p>
								Sẵn sàng đồng hành cùng khách hàng, đồng nghiệp và nhà cung cấp để đạt tới những kết quả tốt
								nhất.
							</p>
						</div>
						<div>
							<p>
								<em>
									<strong>TING THẦN ĐỒNG ĐỘI</strong>
								</em>
							</p>
							<p>
								Sẵn sàng đồng hành cùng khách hàng, đồng nghiệp và nhà cung cấp để đạt tới những kết quả tốt
								nhất.
							</p>
						</div>
						<p>
							<em>
								<strong>CẢI TIẾN KHÔNG NGỪNG</strong>
							</em>
						</p>
						<p>
							Hướng tới trải nghiệm mua sắm và môi trường làm việc không có sự phân biệt đối xử dưới mọi hình
							thức.
						</p>
					</div>
				</div>
			</div>
			{/* Sản phẩm bạn vừa xem */}
			<div className='product-new my-5 container '>
				<div className='spvx row'>
					<div className='hr col'>
						<hr />
					</div>
					<h2 className='fw-bold text-center col'>SẢN PHẨM BẠN VỪA XEM</h2>
					<div className='hr col'>
						<hr />
					</div>
				</div>
				<div className='product-page-favorites-wrap slick-initialized slick-slider my-5'>
					<Slide />
				</div>
			</div>
			{/* Sản phẩm liên quan  */}
			<div className='product-new my-5 container '>
				<div className='spvx row'>
					<div className='hr col'>
						<hr />
					</div>
					<h2 className='fw-bold text-center col'>SẢN PHẨM LIÊN QUAN</h2>
					<div className='hr col'>
						<hr />
					</div>
				</div>
				<div className='product-page-favorites-wrap slick-initialized slick-slider my-5'>
					<Slide />
				</div>
			</div>
			<hr />
		</div>
	);
};

export default ProductDetail;
