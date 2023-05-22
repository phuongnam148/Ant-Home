/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
// Import Swiper
// eslint-disable-next-line no-unused-vars
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import banner from '../../images/slider_1.jpg';
import './scss/home.scss';
import Product_card from '../product-card/Product_card';
// import cards from '../../data.js';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest.js';

const Home = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['products'],
		queryFn: () =>
			newRequest.get('/products').then((res) => {
				return res.data;
			}),
	});
	if (isLoading) return 'Loading...';
	if (error) return 'An error has occurred: ' + error.message;
	return (
		<div className='home'>
			<img className='img-fluid' src={banner} alt='' />
			<div className='container-md'>
				{/* Loại sản phẩm */}
				<div className='home-section-1'>
					<div className='home-cate-head'>
						<h4>DANH MỤC SẢN PHẨM</h4>
						<p>
							Ant Home là giải pháp thương mại điện tử hiện đại và chuyên biệt trong lĩnh vực bán lẻ nội thất,
							đồ trang trí và điện gia dụng trong gia đình, định vị trở thành một giải pháp tiên phong trong
							định hình phong cách sống hiện đại cho các gia chủ tại Việt Nam và khu vực Đông Nam Á qua sự kết
							hợp của những thương hiệu nội thất hàng đầu với đa dạng phong cách và trải nghiệm mua sắm xuyên
							suốt, trực quan thông qua việc tích hợp các ứng dụng 3D visualization, Home Styler, AR và các
							giải pháp tài chính.
						</p>
					</div>
					<div className='home-cate-main'>
						<div className='row row-cols-6'>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/2-ghe-1587981944-1.jpg?v=1596443275397'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Nội thất</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/6-giuong-1587982051-1.jpg?v=1596443309027'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Chăn ra gối nệm</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/9-lo-trang-tri-1587982150-1.jpg?v=1596443201900'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Lọ & bình trang trí</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/3-ke-1587981966-1.jpg?v=1596443380943'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Đồ trang trí</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/8-den-1587982122-1.jpg?v=1596443333337'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Đèn</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/5-sofa-1587982024-1.jpg?v=1596443528717'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Phòng khách</p>
								</a>
							</div>
						</div>
						<div className='row row-cols-6'>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/4-tu-1587981995-1.jpg?v=1596443569283'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Đồ dùng chứa & lưu trữ</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/7-kitchen-1587716252-1.jpg?v=1596443708840'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Đồ gia dụng</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/10-guong-1587982173-1.jpg?v=1596443745467'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Đồ dùng nhà tắm</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/1-ban-1587981900-1.jpg?v=1596443806553'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Bàn trang trí</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/11-thungrac-1587982194-1.jpg?v=1596443858227'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Thùng rác</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/2-ghe-1587981944-1.jpg?v=1596443275397'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text'>Bộ sản phẩm</p>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='home-section-2'>
					<a href=''>
						<div className='img-img-banner1 w-100'>
							<div className='overlay'></div>
						</div>
					</a>
				</div>
				<div className='home-section-3'>
					<div className='home-top-product'>
						<a href='' className='h-title-toppro' title='TOP SẢN PHẨM BÁN CHẠY'>
							TOP SẢN PHẨM BÁN CHẠY
						</a>

						<div className='h-topp row row-cols-md-3 row-cols-lg-4 m-0 p-0'>
							{data.map((prod) => (
								<div key={prod.id_product} className='p-2'>
									<Product_card prod={prod} />
								</div>
							))}
							{/* {data.map((prod) => (
								<Product_card key={cards.id} prod={prod} />
							))} */}
						</div>
						<br />
						<Link className='btn btn-danger' to='/products'>
							Xem tất cả
						</Link>
						{/* <button className='viewmore'>Xem tất cả</button> */}
					</div>
				</div>
				<div className='home-section-4'>
					<div className='slick-track row row-cols-6'>
						<a href='' className='slick-item col'>
							<img
								src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/partner_1.jpg?1678155521674'
								alt=''
							/>
						</a>
						<a href='' className='slick-item col'>
							<img
								src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/partner_2.jpg?1678155521674'
								alt=''
							/>
						</a>
						<a href='' className='slick-item col'>
							<img
								src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/partner_3.jpg?1678155521674'
								alt=''
							/>
						</a>
						<a href='' className='slick-item col'>
							<img
								src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/partner_4.jpg?1678155521674'
								alt=''
							/>
						</a>
						<a href='' className='slick-item col'>
							<img
								src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/partner_5.jpg?1678155521674'
								alt=''
							/>
						</a>
						<a href='' className='slick-item col'>
							<img
								src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/partner_6.jpg?1678155521674'
								alt=''
							/>
						</a>
					</div>
				</div>
				<div className='home-section-5'>
					<div className='home-top-product'>
						<a href='' className='h-title-toppro' title='TOP SẢN PHẨM BÁN CHẠY'>
							SẢN PHẨM NHÀ XANH
						</a>
						<div className='h-topp row row-cols-4 justify-content-between'>
							{/* Xuất Product Card */}
							{status == 'loading' && <p>Đang tải dữ liệu....</p>}
							{status === 'succeeded' &&
								productData.map((prod) => <Product_card key={prod.id_product} prod={prod} />)}
							{status === 'failed' && <p>Error: {error}</p>}
						</div>
						<Link className='viewmore' to='/products'>
							Xem tất cả
						</Link>
						{/* <button >Xem tất cả</button> */}
					</div>
				</div>
				<div className='home-section-6'>
					<div className='section-banner'>
						<div className='row'>
							<div className='col-lg-4 col-md-4 col-sm-4 col-12'>
								<a href='' className='banner'>
									<img
										src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/feature_banner_1.jpg?1678155521674'
										alt=''
										className='banner-image'
									/>
								</a>
							</div>
							<div className='col-lg-4 col-md-4 col-sm-4 col-12'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/feature_banner_2.jpg?1678155521674'
										alt=''
									/>
								</a>
							</div>
							<div className='col-lg-4 col-md-4 col-sm-4 col-12'>
								<a href=''>
									<img
										src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/feature_banner_3.jpg?1678155521674'
										alt=''
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='home-section-7'>
					<div className='section-blog'>
						<a href='' className='blog-title'>
							CẨM NANG NỘI THẤT
						</a>
						<div className='row'>
							<div className='col-lg-4 col-md-4 col-10 item-news-image'>
								<a href='' className='thumb'>
									<img
										src='https://bizweb.dktcdn.net/thumb/grande/100/396/362/articles/bloglist-1-963x600-1.jpg?v=1595229357487'
										alt=''
									/>
								</a>
								<a href='' className='a-title'>
									Nhà phố hai mái giúp gia chủ không cần điều hòa
								</a>
								<div className='author'>20/07/2020</div>
								<p>
									Căn nhà trên mảnh đất 68 m2 ở quận 9 của một gia đình ba người. Để ngôi nhà thông gió và ít
									cần sử dụng điều hòa, kiế...
								</p>
							</div>
							<div className='col-lg-4 col-md-4 col-10 item-news-image'>
								<a href='' className='thumb'>
									<img
										src='https://bizweb.dktcdn.net/thumb/grande/100/396/362/articles/bloglist-1-963x600-1.jpg?v=1595229357487'
										alt=''
									/>
								</a>
								<a href='' className='a-title'>
									Nhà phố hai mái giúp gia chủ không cần điều hòa
								</a>
								<div className='author'>20/07/2020</div>
								<p>
									Căn nhà trên mảnh đất 68 m2 ở quận 9 của một gia đình ba người. Để ngôi nhà thông gió và ít
									cần sử dụng điều hòa, kiế...
								</p>
							</div>
							<div className='col-lg-4 col-md-4 col-10 item-news-image'>
								<a href='' className='thumb'>
									<img
										src='https://bizweb.dktcdn.net/thumb/grande/100/396/362/articles/bloglist-1-963x600-1.jpg?v=1595229357487'
										alt=''
									/>
								</a>
								<a href='' className='a-title'>
									Nhà phố hai mái giúp gia chủ không cần điều hòa
								</a>
								<div className='author'>20/07/2020</div>
								<p>
									Căn nhà trên mảnh đất 68 m2 ở quận 9 của một gia đình ba người. Để ngôi nhà thông gió và ít
									cần sử dụng điều hòa, kiế...
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='home-section-8'>
				<div className='section-mail'>
					<div className='container'>
						<h3>ĐĂNG KÝ ĐỂ NHẬN TIN TỪ ANT HOME</h3>
						<p>
							Đăng kí nhận bản tin khuyến mãi. Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn!
						</p>
						<form action='' method='post' className='form-mail-NT'>
							<input
								type='email'
								className='form-control'
								placeholder='Email của bạn'
								name='EMAIL'
								id='mail'
							/>
							<button name='subscribe' id='subcribe'>
								Đăng ký
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
