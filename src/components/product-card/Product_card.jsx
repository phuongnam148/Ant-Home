/* eslint-disable react/prop-types */
import React from 'react';
import './Product_card.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Product_card = ({ prod }) => {
	let [clickedImage, changeImage] = useState(0);
	const VND = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	});

	return (
		<div className='h-top-pro-card g-col'>
			<Link to={`/product/${prod.id_product}`} className='card-img-top tab-content' id='nav-tabContent'>
				<div>{/* <img src={prod.img[clickedImage]} alt='' /> */}</div>
			</Link>
			<div className='thumb-list list-group id=list-tab' role='tablist'>
				{/* {prod.img.map((item, index) => {
					return (
						<div
							onClick={() => {
								changeImage(index);
							}}
							className={`thumb-list-item list-group-item list-group-item-action`}
							aria-current='img-card'
							key={index}
						>
							<img src={item} alt='' />
						</div>
					);
				})} */}
			</div>
			<Link to='' className='card-text'>
				{prod.name_prod}
			</Link>
			<div className='price-box'>
				<span className='price'>{VND.format(prod.price_prod)}</span>
			</div>
		</div>
	);
};

export default Product_card;
