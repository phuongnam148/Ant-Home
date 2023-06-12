import React from 'react';

const AdCustomerList = () => {
	return (
		<div className='content'>
			<div className='page-header'>
				<div className='page-title'>
					<h4>User List</h4>
					<h6>Manage your User</h6>
				</div>
				<div className='page-btn'>
					<a href='adduser.html' className='btn btn-added'>
						<img src='assets/img/icons/plus.svg' alt='img' className='me-2' />
						Add User
					</a>
				</div>
			</div>

			<div className='card'>
				<div className='card-body'>
					<div className='table-top'>
						<div className='search-set'>
							<div className='search-path'>
								<a className='btn btn-filter' id='filter_search'>
									<img src='assets/img/icons/filter.svg' alt='img' />
									className
									<span>
										<img src='assets/img/icons/closes.svg' alt='img' />
									</span>
								</a>
							</div>
							<div className='search-input'>
								<a className='btn btn-searchset'>
									<img src='assets/img/icons/search-white.svg' alt='img' />
								</a>
							</div>
						</div>
						<div className='wordset'>
							<ul>
								<li>
									<a data-bs-toggle='tooltip' data-bs-placement='top' title='pdf'>
										<img src='assets/img/icons/pdf.svg' alt='img' />
									</a>
								</li>
								<li>
									<a data-bs-toggle='tooltip' data-bs-placement='top' title='excel'>
										<img src='assets/img/icons/excel.svg' alt='img' />
									</a>
								</li>
								<li>
									<a data-bs-toggle='tooltip' data-bs-placement='top' title='print'>
										<img src='assets/img/icons/printer.svg' alt='img' />
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='card' id='filter_inputs'>
						<div className='card-body pb-0'>
							<div className='row'>
								<div className='col-lg-2 col-sm-6 col-12'>
									<div className='form-group'>
										<input type='text' placeholder='Enter User Name' />
									</div>
								</div>
								<div className='col-lg-2 col-sm-6 col-12'>
									<div className='form-group'>
										<input type='text' placeholder='Enter Phone' />
									</div>
								</div>
								<div className='col-lg-2 col-sm-6 col-12'>
									<div className='form-group'>
										<input type='text' placeholder='Enter Email' />
									</div>
								</div>
								<div className='col-lg-2 col-sm-6 col-12'>
									<div className='form-group'>
										<select className='select'>
											<option>Disable</option>
											<option>Enable</option>
										</select>
									</div>
								</div>
								<div className='col-lg-1 col-sm-6 col-12 ms-auto'>
									<div className='form-group'>
										<a className='btn btn-filters ms-auto'>
											<img src='assets/img/icons/search-whites.svg' alt='img' />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='table-responsive'>
						<table className='table  datanew'>
							<thead>
								<tr>
									<th>
										<label className='checkboxs'>
											<input type='checkbox' />
											<span className='checkmarks'></span>
										</label>
									</th>
									<th>Profile</th>
									<th>First name </th>
									<th>Last name </th>
									<th>User name </th>
									<th>Phone</th>
									<th>email</th>
									<th>Status</th>
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
											<img src='assets/img/customer/customer1.jpg' alt='product' />
										</a>
									</td>
									<td>Thomas</td>
									<td>Thomas </td>
									<td>Thomas21 </td>
									<td>+12163547758 </td>
									<td>
										<a
											href='/cdn-cgi/l/email-protection'
											className='__cf_email__'
											data-cfemail='42362a2d2f233102273a232f322e276c212d2f'
										>
											[email&#160;protected]
										</a>
									</td>
									<td>
										<div className='status-toggle d-flex justify-content-between align-items-center'>
											<input type='checkbox' id='user1' className='check' />
											<label htmlFor='user1' className='checktoggle'>
												checkbox
											</label>
										</div>
									</td>
									<td>
										<a className='me-3' href='edituser.html'>
											<img src='assets/img/icons/edit.svg' alt='img' />
										</a>
										<a className='me-3 confirm-text' href='javascript:void(0);'>
											<img src='assets/img/icons/delete.svg' alt='img' />
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

export default AdCustomerList;
