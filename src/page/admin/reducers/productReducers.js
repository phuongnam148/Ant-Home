export const INITIAL_STATE = {
	name_prod: '',
	categories: 0,
	brand_prod: '',
	detail_prod: '',
	description_prod: '',
	specification_prod: '',
	preserve_prod: '',
	price_prod: 0,
	material_prod: 0,
	style_prod: 0,
	img_thumbnail: '',
	list_img: [],
};
export const productReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				[action.payload.name]: action.payload.value,
			};
		case 'ADD_THUMBNAIL':
			return {
				...state,
				img_thumbnail: action.payload,
			};
		case 'ADD_IMAGES':
			return {
				...state,
				list_img: [...state.images, action.payload],
			};
		case 'REMOVE_IMAGE':
			return {
				...state,
				list_img: state.images.filter((feature) => feature !== action.payload), // giữ lại tất cả feature trừ  action.payload
			};
		case 'REMOVE_THUMBNAIL':
			return {
				...state,
				img_thumbnail: '',
			};
		default:
			return state;
	}
};
