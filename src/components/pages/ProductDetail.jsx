import React from 'react';
import './scss/product-detail.scss';

const ProductDetail = () => {
	return (
		// Thanh breadcrumb
		<div className=''>
			<ul className='breadcrumb'>
				<li>
					<a href='#'>Trang chủ</a>
				</li>
				<li>
					<a href='#'>Cây</a>
				</li>
				<li>
					<a href='#'>Cây nhỏ</a>
				</li>
			</ul>
		</div>
	);
};

export default ProductDetail;
