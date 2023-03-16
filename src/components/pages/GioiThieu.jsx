import React from 'react';

const GioiThieu = () => {
	return (
		<div>
			<section className='breadcrumb'>
				<div className='container'>
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<a href='#' className='text-reset'>
									Trang chủ
								</a>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								Giới thiệu
							</li>
						</ol>
					</nav>
				</div>
			</section>
			<section className='page margin-top-20 margin-bottom-20'>
				<div className='container'>
					<div className='row'>
						<div className='col-xs-12 col-sm-12 col-md-12'>
							<div className='page-titlle'>
								<h1 className='title-head'>
									<a href='#' className='text-reset fs-3' title='giới thiệu'>
										Giới thiệu
									</a>
								</h1>
							</div>
							<div className='content-page'>
								<p className='fs-6'>
									<b>Ant Home</b> là sàn thương mại điện tử chuyên cung cấp các sản phẩm nội thất và trang trí
									nội thất cho thị trường Việt Nam. Chúng tôi tin rằng hạnh phúc của mỗi gia đình đều được vun
									đắp từ nhà, không gian sống tạo dựng giá trị cuộc sống. Chính vì vậy mục tiêu, sứ mệnh mà{' '}
									<b>Ant Home</b> hướng tới là đem đến những giải pháp tối ưu về nội thất cho nhà ở, văn
									phòng… Với con đường mà <b>Ant Home</b> đã chọn, chúng tôi mong muốn được cùng xây tổ ấm với
									triệu gia đình Việt đồng thời cùng chung tay kiến tạo không gian làm việc chuyên nghiệp với
									các doanh nghiệp tại Việt Nam.
								</p>
								<p>
									<img
										className='w-100 my-3'
										src='https://bizweb.dktcdn.net/100/396/362/files/baya-service-01.jpg?v=1595211750325'
										alt=''
									/>
								</p>
								<h4 className='fs-4 fw-bolder'>GIÁ TRỊ</h4>
								<p className='fs-6 fw-bold'>
									<em>VÌ KHÁCH HÀNG</em>
								</p>
								<p className='fs-6'>Mang đến những sản phẩm và dịch vụ tốt nhất cho mỗi khách hàng.</p>
								<p className='fs-6 fw-bold'>
									<em>CHÍNH TRỰC</em>
								</p>
								<p className='fs-6'>
									Luôn lựa chọn giải pháp tối ưu nhất cho khách hàng, nhân viên, đối tác và cộng đồng xung
									quanh.
								</p>
								<p className='fs-6 fw-bold'>
									<em>CHẤT LƯỢNG</em>
								</p>
								<p className='fs-6'>
									Không ngừng theo đuổi những tiêu chuẩn chất lượng khắt khe trong mọi quy trình.
								</p>
								<p className='fs-6 fw-bold'>
									<em>TÔN TRỌNG</em>
								</p>
								<p className='fs-6'>
									Hướng tới trải nghiệm mua sắm và môi trường làm việc không có sự phân biệt đối xử dưới mọi
									hình thức.
								</p>
								<p className='fs-6 fw-bold'>
									<em>TINH THẦN ĐỒNG ĐỘI</em>
								</p>
								<p className='fs-6'>
									Sẵn sàng đồng hành cùng khách hàng, đồng nghiệp và nhà cung cấp để đạt tới những kết quả tốt
									nhất.
								</p>
								<p className='fs-6 fw-bold'>
									<em>CẢI TIẾN KHÔNG NGỪNG</em>
								</p>
								<p className='fs-6'>
									Không bao giờ tự hài lòng, chúng tôi sẽ luôn không ngừng phát triển bản thân.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default GioiThieu;
