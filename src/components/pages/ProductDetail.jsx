import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import newRequest from '../../utils/newRequest';

const ProductDetail = () => {
	const [product, setProduct] = useState(null);
	// Lấy data
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const data = await newRequest.get(`/product?id=${id}`);
			setProduct(data.data);
		};
		fetchData();
	}, [id]);
	if (!product) {
		return <div>Loading...</div>; // hiển thị thông báo đang tải dữ liệu
	}
	return (
		<div className='container'>
			<div className='row m-0 p-0'>
				<span>Tên sản phẩm: {product.name_prod}</span>
			</div>
		</div>
	);
};

export default ProductDetail;
