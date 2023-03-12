import React from 'react';
import './Product_card.scss';

const Product_card = (id) => {
	return (
		<div className='h-top-pro-card col'>
			<a href='' className='card-img-top tab-content' id='nav-tabContent'>
				<div
					className='tab-pane fade show active'
					id={`img${id.id}`}
					role='tabpanel'
					aria-labelledby='list-home-list'
				>
					<img
						src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/da0045c9e48defd093797dfc83fa2c67-1590389087.jpg?v=1595556715920'
						alt=''
					/>
				</div>
				<div
					className='tab-pane fade show'
					id={`imgs${id.id}`}
					role='tabpanel'
					aria-labelledby='list-profile-list'
				>
					<img
						src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/z1404288110190-af6a21b6662a892b18ddb3ea9f7795fc-1595478380.jpg?v=1595556722557'
						alt=''
					/>
				</div>
			</a>
			<div className='thumb-list list-group id=list-tab' role='tablist'>
				<div
					className='thumb-list-item list-group-item list-group-item-action active'
					id='list-home-list'
					data-bs-toggle='list'
					href={`#img${id.id}`}
					role='tab'
					aria-controls='list-home'
				>
					<img
						src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/da0045c9e48defd093797dfc83fa2c67-1590389087.jpg?v=1595556715920'
						alt=''
					/>
				</div>
				<div
					className='thumb-list-item list-group-item list-group-item-action'
					id='list-profile-list'
					data-bs-toggle='list'
					href={`#imgs${id.id}`}
					role='tab'
					aria-controls='list-profile'
				>
					<img
						src='https://bizweb.dktcdn.net/thumb/large/100/396/362/products/z1404288110190-af6a21b6662a892b18ddb3ea9f7795fc-1595478380.jpg?v=1595556722557'
						alt=''
					/>
				</div>
			</div>
			<a href='' className='card-text'>
				Bộ 2 Bàn Sofa IGEA Việt Nam Phong Cách Scanvadian Màu Trắng
			</a>
			<div className='price-box'>
				<span className='price'>569.000 VNĐ</span>
			</div>
		</div>
	);
};

export default Product_card;
