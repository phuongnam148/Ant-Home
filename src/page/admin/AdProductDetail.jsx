/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';

import upload from '../../layout/assets/img/icons/upload.svg';

// Import thêm redux
import { useLocation } from 'react-router-dom';

const AdProductDetail = () => {
	// Lấy ID Sản phẩm trên URL
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);
	const id = queryParams.get('id');
	// Lấy data products;
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
								{/* <input type='text' value={productDataId.name_prod} /> */}
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Loại sản phẩm</label>
								<select className='select'>
									<option>Computers</option>
									<option>Mac</option>
								</select>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Loại chi tiết</label>
								<select className='select'>
									<option>None</option>
									<option>option1</option>
								</select>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6 col-12'>
							<div className='form-group'>
								<label>Thương hiệu</label>
								<select className='select'>
									<option>None</option>
									<option>option1</option>
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
								<textarea className='form-control'>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
									been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy
									text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
									dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
									1500s,
								</textarea>
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
								{/* <input type='text' value={productDataId.price_prod} /> */}
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
						<div className='col-lg-12'>
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
						</div>
						<div className='col-12'>
							<div className='product-list'>
								<ul className='row'>
									<li>
										<div className='productviews'>
											<div className='productviewsimg'>
												{/* <img src={productDataId.ImgProduct.img_1} alt='img' /> */}
											</div>
											<div className='productviewscontent'>
												<div className='productviewsname'>
													<h2>macbookpro.jpg</h2>
													<h3>581kb</h3>
												</div>
												<a href='javascript:void(0);' className='hideset'>
													x
												</a>
											</div>
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
