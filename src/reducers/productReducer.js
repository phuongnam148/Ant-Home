export const INITIAL_STATE = {
	name_prod: '',
	price_prod: 0,
	CategoryChild: {
		id_category_child: 0,
		name_category_child: '',
		Category: {
			id_category: 0,
			name_category: '',
		},
	},
	Brand: {
		name_brand: '',
	},
	ImgProduct: [],
	DetailProduct: {
		detail_prod: '',
		description_prod: '',
		specification_prod: '',
		preserve_prod: '',
	},
};

export const ProductReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				[action.payload.name]: action.payload.value,
			};

		case 'ADD_IMAGES':
			return {
				...state,
				ImgProduct: [...state.ImgProduct, action.payload],
			};
		case 'REMOVE_IMAGES':
			return {
				...state,
				ImgProduct: state.ImgProduct.filter((image) => image !== action.payload), // giữ lại tất cả image trừ  action.payload
			};
		default:
			return state;
	}
};
