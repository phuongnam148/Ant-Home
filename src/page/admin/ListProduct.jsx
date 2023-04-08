import React from 'react';
import { Link } from 'react-router-dom';

import plus from '../../layout/assets/img/icons/plus.svg';
import filter from '../../layout/assets/img/icons/filter.svg';
import closes from '../../layout/assets/img/icons/closes.svg';
import search_white from '../../layout/assets/img/icons/search-white.svg';
import pdf from '../../layout/assets/img/icons/pdf.svg';
import excel from '../../layout/assets/img/icons/excel.svg';
import printer from '../../layout/assets/img/icons/printer.svg';
import eye from '../../layout/assets/img/icons/eye.svg';
import edit from '../../layout/assets/img/icons/edit.svg';
import delete_icon from '../../layout/assets/img/icons/delete.svg';

// Sản phẩm
import product1 from '../../layout/assets/img/product/product1.jpg';

const ListProduct = () => {
	return (
		<div className='content'>
			<div className='page-header'>
				<div className='page-title'>
					<h4>Product List</h4>
					<h6>Manage your products</h6>
				</div>
				<div className='page-btn'>
					<Link to='/admin/addproduct' className='btn btn-added'>
						<img src={plus} alt='img' className='me-1' />
						Thêm sản phẩm
					</Link>
				</div>
			</div>

			<div className='card'>
				<div className='card-body'>
					<div className='table-top'>
						<div className='search-set'>
							<div className='search-path'>
								<a className='btn btn-filter' id='filter_search'>
									<img src={filter} alt='img' />
									<span>
										<img src={closes} alt='img' />
									</span>
								</a>
							</div>
							<div className='search-input'>
								<a className='btn btn-searchset'>
									<img src={search_white} alt='img' />
								</a>
							</div>
						</div>
						<div className='wordset'>
							<ul>
								<li>
									<a data-bs-toggle='tooltip' data-bs-placement='top' title='pdf'>
										<img src={pdf} alt='img' />
									</a>
								</li>
								<li>
									<a data-bs-toggle='tooltip' data-bs-placement='top' title='excel'>
										<img src={excel} alt='img' />
									</a>
								</li>
								<li>
									<a data-bs-toggle='tooltip' data-bs-placement='top' title='print'>
										<img src={printer} alt='img' />
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='card mb-0' id='filter_inputs'>
						<div className='card-body pb-0'>
							<div className='row'>
								<div className='col-lg-12 col-sm-12'>
									<div className='row'>
										<div className='col-lg col-sm-6 col-12'>
											<div className='form-group'>
												<select className='select'>
													<option>Choose Product</option>
													<option>Macbook pro</option>
													<option>Orange</option>
												</select>
											</div>
										</div>
										<div className='col-lg col-sm-6 col-12'>
											<div className='form-group'>
												<select className='select'>
													<option>Choose Category</option>
													<option>Computers</option>
													<option>Fruits</option>
												</select>
											</div>
										</div>
										<div className='col-lg col-sm-6 col-12'>
											<div className='form-group'>
												<select className='select'>
													<option>Choose Sub Category</option>
													<option>Computer</option>
												</select>
											</div>
										</div>
										<div className='col-lg col-sm-6 col-12'>
											<div className='form-group'>
												<select className='select'>
													<option>Brand</option>
													<option>N/D</option>
												</select>
											</div>
										</div>
										<div className='col-lg col-sm-6 col-12'>
											<div className='form-group'>
												<select className='select'>
													<option>Price</option>
													<option>150.00</option>
												</select>
											</div>
										</div>
										<div className='col-lg-1 col-sm-6 col-12'>
											<div className='form-group'>
												<a className='btn btn-filters ms-auto'>
													<img src={search_white} alt='img' />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='table-responsive'>
						<table className='table datanew'>
							<thead>
								<tr>
									<th>
										<label className='checkboxs'>
											<input type='checkbox' id='select-all' />
											<span className='checkmarks'></span>
										</label>
									</th>
									<th>Product Name</th>
									<th>SKU</th>
									<th>Category</th>
									<th>Brand</th>
									<th>price</th>
									<th>Unit</th>
									<th>Qty</th>
									<th>Created By</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<label className='checkboxs'>
											<input type='checkbox' />
											<span className='checkmarks'></span>
										</label>
									</td>
									<td className='productimgname'>
										<a href='javascript:void(0);' className='product-img'>
											<img src={product1} alt='product' />
										</a>
										<a href='javascript:void(0);'>Macbook pro</a>
									</td>
									<td>PT001</td>
									<td>Computers</td>
									<td>N/D</td>
									<td>1500.00</td>
									<td>pc</td>
									<td>100.00</td>
									<td>Admin</td>
									<td>
										<a className='me-3' href='product-details.html'>
											<img src={eye} alt='img' />
										</a>
										<a className='me-3' href='editproduct.html'>
											<img src={edit} alt='img' />
										</a>
										<a className='confirm-text' href='javascript:void(0);'>
											<img src={delete_icon} alt='img' />
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListProduct;
