/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

import upload from '../../utils/uploadImg';

import newRequest from '../../utils/newRequest.js';
import { useQuery } from '@tanstack/react-query';

const AdAddProduct = () => {
	// Lấy giá trị của Category
	const [selectedCategory, setSelectedCategory] = useState(null);
	// Lấy giá trị của Brand
	const [brands, setBrands] = useState(null);

	// GỌI API CATEGORIES
	const {
		isLoading,
		error,
		data: dataCate,
	} = useQuery({
		queryKey: ['Categorys'],
		queryFn: () =>
			newRequest.get('/categories/all').then((res) => {
				return res.data;
			}),
	});
	// console.log(dataCate);

	// //GỌI API BRAND
	// useEffect(() => {
	// 	newRequest
	// 		.get('/brands')
	// 		.then((data) => {
	// 			setBrands(data.data);
	// 			setIsLoading(false);
	// 		})
	// 		.catch((error) => console.log(error));
	// }, []);
	// // console.log(brands);

	const createProduct = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('name_prod', e.target.name_prod.value);
		formData.append('id_categories', e.target.id_categories.value);
		// formData.append('brand_prod', e.target.brand_prod.value);
		formData.append('detail_prod', e.target.detail_prod.value);
		// formData.append('description_prod', e.target.description_prod.value);
		// formData.append('specification_prod', e.target.specification_prod.value);
		// formData.append('preserve_prod', e.target.preserve_prod.value);
		formData.append('price_prod', e.target.price_prod.value);
		// formData.append('material_prod', e.target.material_prod.value);
		// formData.append('style_prod', e.target.style_prod.value);
		formData.append('img_thumbnail', e.target.img_thumbnail.files[0]);
		for (let i = 0; i < e.target.list_img.files.length; i++) {
			formData.append('list_img', e.target.list_img.files[i]);
		}

		try {
			const response = await newRequest.post('/product', formData);
			// Xử lý phản hồi từ server
			console.log(response);
		} catch (error) {
			// Xử lý lỗi
			console.log(error);
		}
	};

	// Loading
	if (isLoading) return 'Loading...';
	if (error) return 'An error has occurred: ' + error.message;
	return (
		<div className='content'>
			<div className='page-header'>
				<div className='page-title'>
					<h4>Thêm sản phẩm</h4>
					<h6>Tạo sản phẩm mới</h6>
				</div>
			</div>

			<form onSubmit={createProduct} encType='multipart/form-data'>
				<div className='card'>
					<div className='card-body'>
						<div className='row'>
							<div className='col-lg-3 col-sm-6 col-12'>
								<div className='form-group'>
									<label>Tên sản phẩm</label>
									<input type='text' name='name_prod' />
								</div>
							</div>
							<div className='col-lg-3 col-sm-6 col-12'>
								<div className='form-group'>
									<label>Danh mục</label>
									<select className='select' name='id_categories' value={selectedCategory}>
										<option>Chọn danh mục</option>
										{dataCate.map((item) => (
											<option key={item.id_categories} value={item.id_categories}>
												{item.name_categories}
											</option>
										))}
									</select>
								</div>
							</div>

							{/* <div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Thương hiệu</label>
								<select className='select' name='brand_prod'>
									<option>Chọn thương hiệu</option>
									{brands.map((item) => (
										<option key={item.id_brand} onChange={handlechange} value={item.id_brand}>
											{item.name_brand}
										</option>
									))}
								</select>
							</div>
						</div> */}
							<div className='col-lg-3 col-sm-6 col-12'>
								<div className='form-group'>
									<label>Vật liệu</label>
									<select className='select'>
										<option>Choose Unit</option>
										<option>Nhựa</option>
									</select>
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
									<label>Giá</label>
									<input type='number' name='price_prod' />
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
									<label> Trạng thái</label>
									<select className='select'>
										<option>Closed</option>
										<option>Open</option>
									</select>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='form-group'>
									<label>Chi tiết sản phẩm</label>
									<textarea className='form-control' name='detail_prod'></textarea>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='form-group'>
									<label>Mô tả sản phẩm</label>
									<textarea className='form-control' name='description_prod'></textarea>
								</div>
							</div>

							<div className='col-lg-12'>
								<div className='form-group'>
									<label> Ảnh thumbnail</label>

									<input type='file' className='form-control' name='img_thumbnail' />
								</div>
								{/* Lấy 4 link hình ảnh */}
								<div className='form-group'>
									<div className='mb-3'>
										<label className='form-label'>Ảnh phụ</label>
										<input type='file' multiple className='form-control' name='list_img' />
									</div>
									<div className='img-show'></div>
								</div>
							</div>
							<div className='col-lg-12'>
								<button type='summit' className='btn btn-submit me-2'>
									Tạo sản phẩm
								</button>
								<Link className='btn btn-cancel' to='/admin/listproduct'>
									Huỷ
								</Link>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AdAddProduct;
