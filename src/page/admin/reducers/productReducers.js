export const INITIAL_STATE = {
	name_prod: '',
	cate_child_prod: 0,
	brand_prod: '',
	detail_prod: '',
	description_prod: '',
	specification_prod: '',
	preserve_prod: '',
	price_prod: 0,
	material_prod: 0,
	style_prod: 0,
	img_thumnail: '',
	list_img: [],
};
export const gigReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				[action.payload.name]: action.payload.value,
			};
		case 'ADD_COVER':
			return {
				...state,
				cover: action.payload,
			};
		case 'ADD_IMAGES':
			return {
				...state,
				images: [...state.images, action.payload],
			};
		case 'REMOVE_IMAGE':
			return {
				...state,
				images: state.images.filter((feature) => feature !== action.payload), // giữ lại tất cả feature trừ  action.payload
			};
		case 'REMOVE_COVER':
			return {
				...state,
				cover: '',
			};
		default:
			return state;
	}
};
