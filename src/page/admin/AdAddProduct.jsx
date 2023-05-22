/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

import upload from '../../utils/uploadImg';

import newRequest from '../../utils/newRequest.js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { INITIAL_STATE, productReducer } from './reducers/productReducers';

const AdAddProduct = () => {
	//use product reducer
	// const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);
	//update input
	const [upoading, setUploading] = useState(false);

	const [isLoadings, setIsLoading] = useState(true);
	// Lấy giá trị của Category
	const [selectedCategory, setSelectedCategory] = useState(null);
	// Lấy giá trị của Sub Category
	const [subCateData, setSubCate] = useState([]);
	// Lấy giá trị của Brand
	const [brands, setBrands] = useState(null);
	// Lấy data post
	const [nameProduct, setNameProduct] = useState('');
	const [pcat, setPcat] = useState('');
	const [pbrand, setPbrand] = useState('');
	const [pProductDetail, setPProductDetail] = useState('');
	const [pprice, setPPrice] = useState('');
	// const [pmaterial, setPMaterial] = useState('');

	// Lấy giá trị file
	const [file, setFile] = useState(null);
	const [files, setFiles] = useState([]);

	//
	const {
		isLoading,
		isError,
		data: category,
		error,
	} = useQuery({
		queryKey: ['category'],
		queryFn: async () => {
			try {
				const res = await newRequest.get(`/categories/all`);
				return res.data;
			} catch (error) {
				console.log(error);
			}
		},
	});

	// Lấy sub category
	// useEffect(() => {
	// 	if (selectedCategory) {
	// 		newRequest
	// 			.get(`/category?idcate=${selectedCategory}`)
	// 			.then((data) => setSubCate(data.data.CategoryChildren))
	// 			.catch((error) => console.error(error));
	// 	} else {
	// 		setSubCate([]);
	// 	}
	// }, [selectedCategory]);

	// Check Ok
	// console.log(selectedCategory);
	// console.log(subCateData);
	// Lấy data Brand
	useEffect(() => {
		newRequest
			.get('/brands')
			.then((data) => {
				setBrands(data.data);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);
	// console.log(brands);

	// Test log
	// console.log(nameProduct);
	// console.log(subCate);
	// console.log(pbrand);
	// console.log(pProductDetail);
	// console.log(pprice);

	const dataCreate = {
		name_prod: nameProduct,
		id_categories: pcat,
		brand_prod: pbrand,
		detail_prod: pProductDetail,
		price_prod: pprice,
		img_thumnail: file,
		list_img: [files],
	};

	// const createProduct = () => {
	// 	newRequest
	// 		.post('/product/create', dataCreate)
	// 		.then((res) => console.log(res.data.message))
	// 		.catch((error) => console.log(error));
	// };

	const createProduct = async (e) => {
		e.preventDefault();

		const url = await upload(file);

		// try {
		// 	await newRequest.post('/product/create', dataCreate).then((res) => console.log(res.data.message));
		// } catch (err) {
		// 	console.log(err);
		// }

		console.log(dataCreate);
	};

	//handle upload
	const handleUpload = async () => {
		setUploading(true);
		try {
			const thumbnail = await upload(file);

			const list_img = await Promise.all(
				[...files].map(async (file) => {
					const url = await upload(files);
				})
			);
			// setUploading(false);
			// dispatch({ type: 'ADD_IMAGES', payload: { thumbnail, list_img } });
		} catch (err) {
			console.log(err);
		}
	};

	// Loading
	if (isLoading) {
		return <span>Loading...</span>;
	}
	// Error
	if (isError) {
		return <span>Error: {error.message}</span>;
	}
	if (isLoadings) return <div>Loading...</div>;
	return (
		<div className='content'>
			<div className='page-header'>
				<div className='page-title'>
					<h4>Thêm sản phẩm</h4>
					<h6>Tạo sản phẩm mới</h6>
				</div>
			</div>

			<div className='card'>
				<div className='card-body'>
					<div className='row'>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Tên sản phẩm</label>
								<input
									type='text'
									onChange={(e) => {
										setNameProduct(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Danh mục</label>
								<select
									className='select'
									value={selectedCategory}
									onChange={(e) => {
										setPcat(e.target.value);
									}}
								>
									<option>Chọn danh mục</option>
									{category.map((item) => (
										<option key={item.id_categories} value={item.id_categories}>
											{item.name_categories}
										</option>
									))}
								</select>
							</div>
						</div>
						{/* <div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Danh mục con</label>
								<select
									className='select'
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
						</div> */}
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Thương hiệu</label>
								<select
									className='select'
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
									<option>Choose Unit</option>
									<option>Unit</option>
								</select>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>SKU</label>
								<input type='text' />
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Minimum Qty</label>
								<input type='text' />
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Quantity</label>
								<input type='text' />
							</div>
						</div>
						<div className='col-lg-12'>
							<div className='form-group'>
								<label>Thông tin - mô tả</label>
								<textarea
									className='form-control'
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
								<input
									type='number'
									onChange={(e) => {
										setPPrice(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label> Status</label>
								<select className='select'>
									<option>Closed</option>
									<option>Open</option>
								</select>
							</div>
						</div>
						<div className='col-lg-12'>
							{/* <div className='form-group'>
								<label> Product Image</label>
								<div className='image-upload'>
									<input type='file' />
									<div className='image-uploads'>
										<img src={upload} alt='img' />
										<h4>Drag and drop a file to upload</h4>
									</div>
								</div>
							</div> */}
							{/* Lấy 4 link hình ảnh */}
							<div className='col-6'>
								<div className='mb-3'>
									<label className='form-label'>Ảnh chính</label>
									<input type='text' className='form-control' onChange={(e) => setFile(e.target.value)} />
								</div>
								<div className='mb-3'>
									<label className='form-label'>Ảnh phụ</label>
									<input
										type='text'
										multiple
										className='form-control'
										onChange={(e) => setFiles(e.target.value)}
									/>
									<button>ADD</button>
								</div>
							</div>
						</div>
						<div className='col-lg-12'>
							<button onClick={createProduct} className='btn btn-submit me-2'>
								Tạo sản phẩm
							</button>
							<Link className='btn btn-cancel' to='/admin/listproduct'>
								Huỷ
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdAddProduct;
