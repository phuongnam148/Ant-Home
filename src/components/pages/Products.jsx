import React from 'react';
import './scss/products.scss';

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
				</section>
			</div>
		</div>
	);
};

export default Products;
