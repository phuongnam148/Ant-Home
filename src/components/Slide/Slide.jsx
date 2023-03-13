import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Slide = () => {
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
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slidechange')}
				// loop
				className='myswiper '
			>
				<SwiperSlide>
					<div className='evo-product-block-item card'>
						<div className='tab-content' id='nav-tabContent'>
							<div
								className='tab-pane fade show active'
								id='list-home'
								role='tabpanel'
								aria-labelledby='list-home-list'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-01-1588757868-6b406dff-e575-41a6-bd35-2abd7c54e7f8.jpg?v=1594978131083'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-profile'
								role='tabpanel'
								aria-labelledby='list-profile-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-02-1588757868.jpg?v=1594978134927'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-messages'
								role='tabpanel'
								aria-labelledby='list-messages-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-tu-nhien-0001-1588757868.jpg?v=1595382800583'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-settings'
								role='tabpanel'
								aria-labelledby='list-settings-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-09-1588757868.jpg?v=1595382800583'
								/>
							</div>
						</div>
						<div className='list-group ' id='list-tab' role='tablist'>
							<a
								className='list-group-item list-group-item-action active'
								id='list-home-list'
								data-bs-toggle='list'
								href='#list-home'
								role='tab'
								aria-controls='list-home'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-01-1588757868-6b406dff-e575-41a6-bd35-2abd7c54e7f8.jpg?v=1594978131083'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-profile-list'
								data-bs-toggle='list'
								href='#list-profile'
								role='tab'
								aria-controls='list-profile'
							>
								<img
									className=''
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-02-1588757868.jpg?v=1594978134927'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-messages-list'
								data-bs-toggle='list'
								href='#list-messages'
								role='tab'
								aria-controls='list-messages'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-tu-nhien-0001-1588757868.jpg?v=1595382800583'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-settings-list'
								data-bs-toggle='list'
								href='#list-settings'
								role='tab'
								aria-controls='list-settings'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-09-1588757868.jpg?v=1595382800583'
								/>
							</a>
						</div>
						<a
							href='#1'
							className='titleproduct text-reset text-decoration-none text-center'
							title='Giá Treo Quần Áo Beyours A Hanger 2FL Gỗ'
							tabIndex={0}
						>
							Giá Treo Quần Áo Beyours A Hanger 2FL Gỗ
						</a>
						<div className='price-box-product'>
							<span className='price'>399.99 d</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='evo-product-block-item card'>
						<div className='tab-content' id='nav-tabContent'>
							<div
								className='tab-pane fade show active'
								id='list-home1'
								role='tabpanel'
								aria-labelledby='list-home-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/legrow-tg-p1-with-plant-write-1000-03c594e1c8ae425384ae2c63ea2dd273-master-1586773774.jpg?v=1594712758977'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-profile1'
								role='tabpanel'
								aria-labelledby='list-profile-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/legrow-tg-p1-gray20-1000-386553d7154549baad1b9a9aba5097c0-master-1586773774.jpg?v=1594712768600'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-messages1'
								role='tabpanel'
								aria-labelledby='list-messages-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/legrow-tg-p1-1000-441cbca7506148ebb67ef410be460db1-master-1586773774.jpg?v=1594712779107'
								/>
							</div>
						</div>
						<div className='list-group ' id='list-tab' role='tablist'>
							<a
								className='list-group-item list-group-item-action active'
								id='list-home-list'
								data-bs-toggle='list'
								href='#list-home1'
								role='tab'
								aria-controls='list-home'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/100/396/362/products/legrow-tg-p1-with-plant-write-1000-03c594e1c8ae425384ae2c63ea2dd273-master-1586773774.jpg?v=1594712758977'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-profile-list'
								data-bs-toggle='list'
								href='#list-profile1'
								role='tab'
								aria-controls='list-profile'
							>
								<img
									className=''
									src='https://bizweb.dktcdn.net/100/396/362/products/legrow-tg-p1-gray20-1000-386553d7154549baad1b9a9aba5097c0-master-1586773774.jpg?v=1594712768600'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-messages-list'
								data-bs-toggle='list'
								href='#list-messages1'
								role='tab'
								aria-controls='list-messages'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/100/396/362/products/legrow-tg-p1-1000-441cbca7506148ebb67ef410be460db1-master-1586773774.jpg?v=1594712779107'
								/>
							</a>
						</div>
						<a
							href='#1'
							className='titleproduct text-reset text-decoration-none text-center'
							title='Giá Treo Quần Áo Beyours A Hanger 2FL Gỗ'
							tabIndex={0}
						>
							Giá Treo Quần Áo Beyours A Hanger 2FL Gỗ
						</a>
						<div className='price-box-product'>
							<span className='price'>399.99 d</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='evo-product-block-item card'>
						<div className='tab-content' id='nav-tabContent'>
							<div
								className='tab-pane fade show active'
								id='list-home2'
								role='tabpanel'
								aria-labelledby='list-home-list'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-01-1588757868-6b406dff-e575-41a6-bd35-2abd7c54e7f8.jpg?v=1594978131083'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-profile2'
								role='tabpanel'
								aria-labelledby='list-profile-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-02-1588757868.jpg?v=1594978134927'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-messages2'
								role='tabpanel'
								aria-labelledby='list-messages-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-tu-nhien-0001-1588757868.jpg?v=1595382800583'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-settings2'
								role='tabpanel'
								aria-labelledby='list-settings-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-09-1588757868.jpg?v=1595382800583'
								/>
							</div>
						</div>
						<div className='list-group ' id='list-tab' role='tablist'>
							<a
								className='list-group-item list-group-item-action active'
								id='list-home-list'
								data-bs-toggle='list'
								href='#list-home2'
								role='tab'
								aria-controls='list-home'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-01-1588757868-6b406dff-e575-41a6-bd35-2abd7c54e7f8.jpg?v=1594978131083'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-profile-list'
								data-bs-toggle='list'
								href='#list-profile2'
								role='tab'
								aria-controls='list-profile'
							>
								<img
									className=''
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-02-1588757868.jpg?v=1594978134927'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-messages-list'
								data-bs-toggle='list'
								href='#list-messages2'
								role='tab'
								aria-controls='list-messages'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-tu-nhien-0001-1588757868.jpg?v=1595382800583'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-settings-list'
								data-bs-toggle='list'
								href='#list-settings2'
								role='tab'
								aria-controls='list-settings'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-09-1588757868.jpg?v=1595382800583'
								/>
							</a>
						</div>
						<a
							href='#1'
							className='titleproduct text-reset text-decoration-none text-center'
							title='Giá Treo Quần Áo Beyours A Hanger 2FL Gỗ'
							tabIndex={0}
						>
							Giá Treo Quần Áo Beyours A Hanger 2FL Gỗ
						</a>
						<div className='price-box-product'>
							<span className='price'>399.99 d</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='evo-product-block-item card'>
						<div className='tab-content' id='nav-tabContent'>
							<div
								className='tab-pane fade show active'
								id='list-home3'
								role='tabpanel'
								aria-labelledby='list-home-list'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-01-1588757868-6b406dff-e575-41a6-bd35-2abd7c54e7f8.jpg?v=1594978131083'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-profile3'
								role='tabpanel'
								aria-labelledby='list-profile-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-02-1588757868.jpg?v=1594978134927'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-messages3'
								role='tabpanel'
								aria-labelledby='list-messages-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-tu-nhien-0001-1588757868.jpg?v=1595382800583'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-settings3'
								role='tabpanel'
								aria-labelledby='list-settings-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-09-1588757868.jpg?v=1595382800583'
								/>
							</div>
						</div>
						<div className='list-group ' id='list-tab' role='tablist'>
							<a
								className='list-group-item list-group-item-action active'
								id='list-home-list'
								data-bs-toggle='list'
								href='#list-home3'
								role='tab'
								aria-controls='list-home'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-01-1588757868-6b406dff-e575-41a6-bd35-2abd7c54e7f8.jpg?v=1594978131083'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-profile-list'
								data-bs-toggle='list'
								href='#list-profile3'
								role='tab'
								aria-controls='list-profile'
							>
								<img
									className=''
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-02-1588757868.jpg?v=1594978134927'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-messages-list'
								data-bs-toggle='list'
								href='#list-messages3'
								role='tab'
								aria-controls='list-messages'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-tu-nhien-0001-1588757868.jpg?v=1595382800583'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-settings-list'
								data-bs-toggle='list'
								href='#list-settings3'
								role='tab'
								aria-controls='list-settings'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-09-1588757868.jpg?v=1595382800583'
								/>
							</a>
						</div>
						<a
							href='#1'
							className='titleproduct text-reset text-decoration-none text-center'
							title='Giá Treo Quần Áo Beyours A Hanger 2FL Gỗ'
							tabIndex={0}
						>
							Giá Treo Quần Áo Beyours A Hanger 2FL Gỗ
						</a>
						<div className='price-box-product'>
							<span className='price'>399.99 d</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='evo-product-block-item card'>
						<div className='tab-content' id='nav-tabContent'>
							<div
								className='tab-pane fade show active'
								id='list-home4'
								role='tabpanel'
								aria-labelledby='list-home-list'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-01-1588757868-6b406dff-e575-41a6-bd35-2abd7c54e7f8.jpg?v=1594978131083'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-profile4'
								role='tabpanel'
								aria-labelledby='list-profile-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-02-1588757868.jpg?v=1594978134927'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-messages4'
								role='tabpanel'
								aria-labelledby='list-messages-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-tu-nhien-0001-1588757868.jpg?v=1595382800583'
								/>
							</div>
							<div
								className='tab-pane fade'
								id='list-settings4'
								role='tabpanel'
								aria-labelledby='list-settings-list'
							>
								<img
									className='w-100'
									src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-09-1588757868.jpg?v=1595382800583'
								/>
							</div>
						</div>
						<div className='list-group ' id='list-tab' role='tablist'>
							<a
								className='list-group-item list-group-item-action active'
								id='list-home-list'
								data-bs-toggle='list'
								href='#list-home4'
								role='tab'
								aria-controls='list-home'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/large/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-01-1588757868-6b406dff-e575-41a6-bd35-2abd7c54e7f8.jpg?v=1594978131083'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-profile-list'
								data-bs-toggle='list'
								href='#list-profile4'
								role='tab'
								aria-controls='list-profile'
							>
								<img
									className=''
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-02-1588757868.jpg?v=1594978134927'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-messages-list'
								data-bs-toggle='list'
								href='#list-messages4'
								role='tab'
								aria-controls='list-messages'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-tu-nhien-0001-1588757868.jpg?v=1595382800583'
								/>
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-settings-list'
								data-bs-toggle='list'
								href='#list-settings4'
								role='tab'
								aria-controls='list-settings'
							>
								<img
									className='w-100'
									src='//bizweb.dktcdn.net/thumb/small/100/396/362/products/gia-treo-quan-ao-a-hanger-2fl-go-09-1588757868.jpg?v=1595382800583'
								/>
							</a>
						</div>
						<a
							href='#1'
							className='titleproduct text-reset text-decoration-none text-center'
							title='Giá Treo Quần Áo Beyours A Hanger 2FL Gỗ'
							tabIndex={0}
						>
							Giá Treo Quần Áo Beyours A Hanger 2FL Gỗ
						</a>
						<div className='price-box-product'>
							<span className='price'>399.99 d</span>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slide;
