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
	const [showMore, setShowMore] = useState(true);

	const handleShowMore = () => {
		setShowMore(false);
	};

	return (
		// Thanh breadcrumb
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
				<div className='col-12 col-xl-6'>
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
							<img
								className='img-fluid'
								src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/z1404288110190-af6a21b6662a892b18ddb3ea9f7795fc-1595478380.jpg?v=1595556722557'
								alt=''
							/>
						</div>
					</div>
				</div>
				<div className='col-12 col-xl-6'>
					<div className=''>
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
					<div className=''>
						<p>569.000₫</p>
					</div>
					<form action='' className='' onSubmit={handleSubmit}>
						<div className=''>
							<label htmlFor='exampleColorInput' className='form-label'>
								Màu sắc
							</label>
							<div className='vang'></div>
							<div className='do'></div>
						</div>
						<div className='material-product '>
							<label htmlFor='' className='border border-warning p-1'>
								Gỗ công nghiệp
							</label>
						</div>
						<button type='button' onClick={handleDecrement}>
							-
						</button>
						<input
							className=''
							type='number'
							min='1'
							value={value}
							onChange={(event) => setValue(event.target.value)}
						/>
						<button type='button' onClick={handleIncrement}>
							+
						</button>
						<button type='submit'>Thêm vào giỏ</button>
					</form>
					{/* Sp yêu thích */}
					<div className=''>
						<i className='fa-regular fa-heart me-1'></i>
						<span>Thêm vào yêu thích</span>
					</div>
					{/* Thông tin chi tiết */}
					<div>
						<p className={showMore ? 'show-more' : ''}>{productDetail}</p>
						{showMore && <button onClick={handleShowMore}>Xem thêm </button>}
						{showMore && <button onClick={() => setShowMore(true)}>Thu gọn</button>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
