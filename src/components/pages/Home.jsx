import React from 'react';
import banner from '../../images/slider_1.jpg';
import './scss/home.scss';
const Home = () => {
	return (
		<div className='container-fluid'>
			<img className='img-fluid' src={banner} alt='' />
			<div>Home Component</div>
			<div className='.container-md'>
				<div className='section-1'>
					<div className='cate-head'>
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
					<div className='cate-main'>
						<div className='row'>
							<div className='col'>Nội thất</div>
							<div className='col'>Chăn ra gối nệm</div>
							<div className='col'>Lọ bình trang trí</div>
							<div className='col'>Đồ trang trí</div>
							<div className='col'>Đèn</div>
							<div className='col'>Phòng khách</div>
						</div>
						<div className='row'>
							<div className='col'>Đồ dùng chứa, lưu trữ</div>
							<div className='col'>Đồ gia dụng</div>
							<div className='col'>Đồ dùng nhà tắm</div>
							<div className='col'>Bàn trang trí</div>
							<div className='col'>Thùng rác</div>
							<div className='col'>Bộ sản phẩm</div>
						</div>
					</div>
				</div>
				<div className='section-2'></div>
				<div className='section-3'></div>
				<div className='section-4'></div>
				<div className='section-5'></div>
				<div className='section-6'></div>
				<div className='section-7'></div>
				<div className='section-8'></div>
				<div className='section-9'></div>
			</div>
		</div>
	);
};

export default Home;
