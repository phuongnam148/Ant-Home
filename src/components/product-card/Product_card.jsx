/* eslint-disable react/prop-types */
import React from 'react';
import './Product_card.scss';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Product_card = ({ card }) => {
	let [clickedImage, changeImage] = useState(0);

	if (card) {
		// console.log(card);

		return (
			<div className='h-top-pro-card g-col'>
				<a href='' className='card-img-top tab-content' id='nav-tabContent'>
					<div>
						<img src={card.img[clickedImage]} alt='' />
					</div>
				</a>
				<div className='thumb-list list-group id=list-tab' role='tablist'>
					{card.img.map((item, index) => {
						return (
							<div
								onClick={() => {
									changeImage(index);
								}}
								className={`thumb-list-item list-group-item list-group-item-action `}
								role='tab'
								key={index}
							>
								<img src={item} alt='' />
							</div>
						);
					})}
				</div>
				<a href='' className='card-text'>
					Bộ 2 Bàn Sofa IGEA Việt Nam Phong Cách Scanvadian Màu Trắng
				</a>
				<div className='price-box'>
					<span className='price'>569.000 VNĐ</span>
				</div>
			</div>
		);
	}
};

export default Product_card;
