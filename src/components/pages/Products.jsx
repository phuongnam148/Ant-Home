/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductData } from '../../redux/productSlide.js';
import './scss/products.scss';
import Product_card from '../product-card/Product_card';

import Category from '../Category/Category';

import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest.js';

const Products = () => {
	// Lấy dữ liệu từ Store
	const dispatch = useDispatch();
	const productData = useSelector((state) => state.product.data);
	const status = useSelector((state) => state.product.status);

	// Lấy data products
	useEffect(() => {
		dispatch(getProductData());
	}, [dispatch]);
	// Check data Products
	// console.log(productData);

	// Lọc sản phẩm
	// const [under100, setUnder100] = useState(false);
	// const [between100And200, setBetween100And200] = useState(false);

	// Lấy data sản phẩm lọc theo giá
	// useEffect(() => {
	// 	let url = '';
	// 	if (under100) {
	// 		url += '/products-price?min=0&max=6000';
	// 	} else if (between100And200) {
	// 		url += '/products-price?min=7000&max=10000';
	// 	}
	// 	if (!under100 && !between100And200) {
	// 		url = '/products';
	// 	}
	// 	newRequest
	// 		.get(url)
	// 		.then((response) => {
	// 			setProducts(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, [under100, between100And200]);
	// Kiểm tra checkbox lọc
	// const handleCheckboxChange = (event) => {
	// 	const { name, checked } = event.target;
	// 	if (name === 'under100') {
	// 		setUnder100(checked);
	// 		setBetween100And200(false);
	// 	} else {
	// 		setBetween100And200(checked);
	// 		setUnder100(false);
	// 	}
	// };
	// Lấy lữ liệu Category
	const {
		isLoading,
		error,
		data: dataCate,
	} = useQuery({
		queryKey: ['Categorys'],
		queryFn: () =>
			newRequest.get('/categorys').then((res) => {
				return res.data;
			}),
	});
	if (isLoading) return 'Đang tải dữ liệu...';
	if (error) return 'An error has occurred: ' + error.message;

	return (
		<div className='container'>
			<div className='row m-0 p-0'>
				<section className='main_container collection col-md-12 col-lg-12 margin-bottom-5 order-lg-first order-md-first order-sm-last order-last'>
					<div className='product-gray product_recent product-page-favorites'>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb'>
								<li className='breadcrumb-item'>
									<a href='#' className='text-reset'>
										Trang chủ
									</a>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Tất cả sản phẩm
								</li>
							</ol>
						</nav>
						<div className='row m-0 p-0'>
							<div className='col-lg-12'>
								<div className='related-product'>
									<div
										className='product--home home-title lazy p-2 text-center fw-bold fs-5 '
										data-src='//bizweb.dktcdn.net/100/396/362/themes/777022/assets/bestsell.jpg?1678155521674'
										data-was-processed='true'
									>
										Top sản phẩm bán chạy
									</div>
									<div className='product-page-favorites-wrap slick-initialized slick-slider '>
										{/* <Slide /> */}
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Fix show sản phẩm */}
					{/* <div className='show-products'>pppp</div> */}
					{/* Show sản phẩm */}
					<div className='row my-5'>
						<section className='collection col-lg-12 col-md-12 col-sm-12 col-12'>
							<h1 className='col-title text-uppercase '>Tất cả sản phẩm</h1>
							<div className='category-products products category-products-grids clearfix my-1'>
								<div className='sort-cate clearfix d-md-block d-none'>
									<div className='sort-cate-left row'>
										<h3 className='fs-6 col-2'>Xếp theo:</h3>
										<div className='col-10'>
											<ul className='row'>
												<li className='btn-quick-sort alpha-asc list-unstyled col-2'>
													<div className='form-check '>
														<input
															className='form-check-input'
															type='radio'
															name='flexRadioDefault'
															id='flexRadioDefault1'
														/>
														<label className='form-check-label' htmlFor='flexRadioDefault1'>
															Tên A-Z
														</label>
													</div>
												</li>
												<li className='btn-quick-sort alpha-asc list-unstyled col-2'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='radio'
															name='flexRadioDefault'
															id='flexRadioDefault2'
														/>
														<label className='form-check-label' htmlFor='flexRadioDefault2'>
															Z-A
														</label>
													</div>
												</li>
												<li className='btn-quick-sort alpha-asc list-unstyled col-2'>
													<div className='form-check '>
														<input
															className='form-check-input'
															type='radio'
															name='flexRadioDefault'
															id='flexRadioDefault3'
														/>
														<label className='form-check-label' htmlFor='flexRadioDefault3'>
															Hàng mới
														</label>
													</div>
												</li>
												<li className='btn-quick-sort alpha-asc list-unstyled col-3'>
													<div className='form-check '>
														<input
															className='form-check-input'
															type='radio'
															name='flexRadioDefault'
															id='flexRadioDefault4'
														/>
														<label className='form-check-label' htmlFor='flexRadioDefault4'>
															Giá thấp đến cao
														</label>
													</div>
												</li>
												<li className='btn-quick-sort alpha-asc list-unstyled col-3'>
													<div className='form-check '>
														<input
															className='form-check-input'
															type='radio'
															name='flexRadioDefault'
															id='flexRadioDefault5'
														/>
														<label className='form-check-label' htmlFor='flexRadioDefault5'>
															Giá cao xuốn thấp
														</label>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<hr className='hr' />
							<div className='products-view row row-cols-3 justify-content-between gap-1 mb-3'>
								{/* Xuất Product Card */}
								{status == 'loading' && <p>Đang tải dữ liệu....</p>}
								{status === 'succeeded' &&
									productData.map((prod) => <Product_card key={prod.id_product} prod={prod} />)}
								{status === 'failed' && <p>Error: {error}</p>}
							</div>
							<div className='row m-0 p-0'>
								<div className='col-lg-12 col-sm-12 col-12 margin-top-20 fix-page'>
									<nav aria-label='Page navigation example' id='pt'>
										<ul className='pagination '>
											<li className='page-item col-1'>
												<a
													className='page-link text-center text-reset  rounded-circle'
													href='#'
													aria-label='Previous'
													id='pl'
												>
													<span aria-hidden='true'>&laquo;</span>
													<span className='sr-only'>Previous</span>
												</a>
											</li>
											<li className='page-item col-1'>
												<a className='page-link text-center text-reset rounded-circle' id='pl' href='#'>
													1
												</a>
											</li>
											<li className='page-item col-1'>
												<a className='page-link text-center text-reset rounded-circle' id='pl' href='#'>
													2
												</a>
											</li>
											<li className='page-item col-1'>
												<a className='page-link text-center text-reset rounded-circle' id='pl' href='#'>
													3
												</a>
											</li>
											<li className='page-item col-1'>
												<a
													className='page-link text-center text-reset rounded-circle'
													id='pl'
													href='#'
													aria-label='Next'
												>
													<span aria-hidden='true'>&raquo;</span>
													<span className='sr-only'>Next</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</section>
					</div>
				</section>
				<div className='text-center evo-main-des col-12 col-lg-12 col-md-12 order-sm-first order-first order-lg-last order-md-last margin-bottom-10 margin-top-10'>
					Ant Home là sàn thương mại điện tử chuyên cung cấp các sản phẩm nội thất và trang trí nội thất cho
					thị trường Việt Nam. Chúng tôi tin rằng hạnh phúc của mỗi gia đình đều được vun đắp từ nhà, không
					gian sống tạo dựng giá trị cuộc sống. Chính vì vậy mục tiêu, sứ mệnh mà Ant Home hướng tới là đem
					đến những giải pháp tối ưu về nội thất cho nhà ở, văn phòng… Với con đường mà Ant Home đã chọn,
					chúng tôi mong muốn được cùng xây tổ ấm với triệu gia đình Việt đồng thời cùng chung tay kiến tạo
					không gian làm việc chuyên nghiệp với các doanh nghiệp tại Việt Nam.
				</div>
			</div>
			<hr />
		</div>
	);
};

export default Products;
