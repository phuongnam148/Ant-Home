/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';

import upload from '../../layout/assets/img/icons/upload.svg';

// Import thêm redux
import { useLocation } from 'react-router-dom';
import newRequest from '../../utils/newRequest.js';
import { useQuery } from '@tanstack/react-query';

const AdProductDetail = () => {
	// Lấy giá trị của sản phẩm chi tiết
	const [productDataId, setProductDataId] = useState(null);
	// Lấy giá trị của Category
	const [selectedCategory, setSelectedCategory] = useState(null);
	// Lấy giá trị của category
	const [category, setCategory] = useState(null);
	// Lấy giá trị của Sub Category
	const [subCateData, setSubCate] = useState([]);
	// Lấy giá trị của Brand
	const [brands, setBrands] = useState(null);
	// Lấy data post
	const [nameProduct, setNameProduct] = useState('');
	const [subCate, setPSubCate] = useState('');
	const [pbrand, setPbrand] = useState('');
	const [pProductDetail, setPProductDetail] = useState('');
	const [pprice, setPPrice] = useState('');
	// const [pmaterial, setPMaterial] = useState('');
	const [images1, setImages1] = useState('');
	const [images2, setImages2] = useState('');
	const [images3, setImages3] = useState('');
	const [images4, setImages4] = useState('');
	// Lấy ID Sản phẩm trên URL
	const { search } = useLocation();
	const id = new URLSearchParams(search).get('id');
	// Lấy data products;
	// Get Data
	useEffect(() => {
		newRequest
			.get(`/product?id=${id}`)
			.then((data) => setProductDataId(data.data))
			.catch((error) => console.error(error));
	}, [id]);
	// const {
	// 	isLoading,
	// 	isError,
	// 	data: productDataId,
	// 	error,
	// 	refetch,
	// } = useQuery({
	// 	queryKey: ['productdetail'],
	// 	queryFn: async () => {
	// 		try {
	// 			const res = await newRequest.get(`/product?id=${id}`);
	// 			return res.data;
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	},
	// });
	// Kiểm tra thay đổi
	// useEffect(() => {
	// 	refetch();
	// }, [id]);

	// Lấy category
	useEffect(() => {
		newRequest
			.get(`/categorys`)
			.then((data) => setCategory(data.data))
			.catch((error) => console.error(error));
	}, []);

	// Lấy sub category
	useEffect(() => {
		if (selectedCategory) {
			newRequest
				.get(`/category?idcate=${selectedCategory}`)
				.then((data) => setSubCate(data.data.CategoryChildren))
				.catch((error) => console.error(error));
		} else {
			setSubCate([]);
		}
	}, [selectedCategory]);

	// Lấy data Brand
	useEffect(() => {
		newRequest
			.get('/brands')
			.then((data) => setBrands(data.data))
			.catch((error) => console.log(error));
	}, []);
	// console.log(brands);

	const handleCategoryChange = (event) => {
		setSelectedCategory(event.target.value);
	};

	// console.log(productDataId.Brand.id_brand);
	// Loading
	if (!productDataId) {
		return <span>Loading...</span>;
	}
	if (!category) return <div>Loading......</div>;
	//
	return (
		<div className='content'>
			<div className='page-header'>
				<div className='page-title'>
					<h4>Xem, Sửa Sản phẩm</h4>
					<h6>Cập nhật sản phẩm</h6>
				</div>
			</div>

			<div className='card'>
				<div className='card-body'>
					<div className='row'>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Tên sản phẩm</label>
								<input type='text' value={productDataId.name_prod} />
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Danh mục</label>
								<select
									className='select'
									defaultValue={productDataId.CategoryChild.Category.id_category}
									// value={selectedCategory}
									onChange={handleCategoryChange}
								>
									<option>Chọn danh mục</option>
									{category.map((item) => (
										<option key={item.id_category} value={item.id_category}>
											{item.name_category}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Danh mục con</label>
								<select
									className='select'
									defaultValue={productDataId.CategoryChild.id_category_child}
									onChange={(e) => {
										setPSubCate(e.target.value);
									}}
								>
									<option>Chọn danh mục con</option>
									{subCateData.map((item) => (
										<option key={item.id_category_child} value={item.id_category_child}>
											{item.name_category_child}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Thương hiệu</label>
								<select
									className='select'
									defaultValue={productDataId.Brand.id_brand}
									onChange={(e) => {
										setPbrand(e.target.value);
									}}
								>
									<option>Chọn thương hiệu</option>
									{brands.map((item) => (
										<option key={item.id_brand} value={item.id_brand}>
											{item.name_brand}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Unit</label>
								<select className='select'>
									<option>Piece</option>
									<option>Kg</option>
								</select>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>SKU</label>
								<input type='text' value='PT0002' />
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Minimum Qty</label>
								<input type='text' value='5' />
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Quantity</label>
								<input type='text' value='50' />
							</div>
						</div>
						<div className='col-lg-12'>
							<div className='form-group'>
								<label>Mô tả</label>
								<textarea
									className='form-control'
									value={productDataId.DetailProduct.detail_prod}
									onChange={(e) => {
										setPProductDetail(e.target.value);
									}}
								></textarea>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Tax</label>
								<select className='select'>
									<option>Choose Tax</option>
									<option>2%</option>
								</select>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Discount Type</label>
								<select className='select'>
									<option>Percentage</option>
									<option>10%</option>
									<option>20%</option>
								</select>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Giá</label>
								<input type='text' value={productDataId.price_prod} />
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Tình trạng</label>
								<select className='select'>
									<option>Active</option>
									<option>Open</option>
								</select>
							</div>
						</div>
						{/* NOTE KHÔNG ĐƯỢC XOÁ */}
						{/* <div className='col-lg-12'>
							<div className='form-group'>
								<label> Product Image</label>
								<div className='image-upload'>
									<input type='file' />
									<div className='image-uploads'>
										<img src={upload} alt='img' />
										<h4>Kéo và thả file</h4>
									</div>
								</div>
							</div>
						</div> */}
						<div className='col-12'>
							<div className='product-list'>
								<ul className='row'>
									<li>
										<div className='productviews'>
											<div className='productviewsimg'>
												{/* <img src={productDataId.ImgProduct.img_1} alt='img' /> */}
											</div>
											{/* <div className='productviewscontent'>
												<div className='productviewsname'>
													<h2>macbookpro.jpg</h2>
													<h3>581kb</h3>
												</div>
												<a href='javascript:void(0);' className='hideset'>
													x
												</a>
											</div> */}
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-lg-12'>
							<a href='javascript:void(0);' className='btn btn-submit me-2'>
								Update
							</a>
							<a href='productlist.html' className='btn btn-cancel'>
								Cancel
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdProductDetail;
