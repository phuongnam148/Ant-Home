import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Product_card from '../product-card/Product_card';
import newRequest from '../../utils/newRequest.js';
import './Slide.scss';
const Slide = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		newRequest
			.get('/products')
			.then((res) => {
				setProducts(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return (
		<div>
			<Swiper
				modules={[Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y]}
				navigation
				// effect={'fade'}
				speed={800}
				slidesPerView={4}
				// autoplay={{delay: 1000}}
				// pagination={{clickable: true}}
				spaceBetween={20}
				// pagination={{ clickable: true }}
				// scrollbar={{ draggable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slidechange')}
				// loop
				className='myswiper '
			>
				{products.map((prod) => (
					<SwiperSlide key={prod.id_product}>
						<Product_card prod={prod} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slide;
