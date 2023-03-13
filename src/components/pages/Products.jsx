import React from 'react';
import './scss/products.scss';
import '../scss/app.scss';
import Slide from '../Slide/Slide';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';
// import 'swiper/css/autoplay';
// import 'swiper/css/pagination';

const Products = () => {
	// const photo = [
	// 	'Genshin-Impact-Raiden-Shogun-Wallpaper.jpg',
	// 	'ahri-mua-12.jpg',
	// 	'raiden shogun and miko.png',
	// 	'Ruler.(Artoria.Pendragon).full.3666608.jpg',
	// 	'Ruler.(Artoria.Pendragon).full.2905203.jpg',
	// 	'dep.jpg',
	// ];
	return (
		<div className='container'>
			<div className='row'>
				<section className='main_container collection col-md-12 col-lg-12 margin-bottom-5 order-lg-first order-md-first order-sm-last order-last'>
					<div className='product-gray product_recent product-page-favorites'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='related-product'>
									<div
										className='product--home home-title lazy p-2 text-center fw-bold fs-5 '
										data-src='//bizweb.dktcdn.net/100/396/362/themes/777022/assets/bestsell.jpg?1678155521674'
										data-was-processed='true'
									>
										Top sản phẩm bán chạy
									</div>
									<div className='product-page-favorites-wrap slick-initialized slick-slider'>
										<Slide />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row my-5'>
						<aside className='sidebar col-lg-3 col-md-12 col-sm-12 col-12 left-content'>
							<div className='aside-category card d-lg-block d-none margin-bottom-20'>
								<div className='aside-title text-center card-header text-uppercase fs-6 fw-bold'>
									Danh mục sản phẩm
								</div>
								<div className='aside-content'>
									<ul className='navbar-pills my-2 '>
										<li className='nav-item list-unstyled my-1 '>
											<div>
												<a
													className='nav-link dropdown-toggle'
													data-bs-toggle='collapse'
													href='#contentId'
													aria-expanded='false'
													aria-controls='contentId'
												>
													Nội thất
												</a>
											</div>
											<div className='collapse' id='contentId'>
												<ul>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Phòng khách
														</a>
													</li>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Phòng ăn
														</a>
													</li>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Phòng ngủ
														</a>
													</li>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Phòng làm việc
														</a>
													</li>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Phòng cho bé
														</a>
													</li>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Nội thất thông minh
														</a>
													</li>
												</ul>
											</div>
										</li>
										<li className='nav-item list-unstyled my-1'>
											<div>
												<a
													className='nav-link dropdown-toggle'
													data-bs-toggle='collapse'
													href='#contentId1'
													aria-expanded='false'
													aria-controls='contentId1'
												>
													Đồ trang trí
												</a>
												<i className='bi bi-arrow-down'></i>
											</div>
											<div className='collapse' id='contentId1'>
												<ul>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Phòng khách
														</a>
													</li>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Phòng ăn
														</a>
													</li>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Phòng ngủ
														</a>
													</li>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Phòng làm việc
														</a>
													</li>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Phòng cho bé
														</a>
													</li>
													<li className='nav-item list-unstyled my-1'>
														<a href='#' className='nav-link'>
															Nội thất thông minh
														</a>
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</aside>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Products;
