import { configureStore } from '@reduxjs/toolkit';
//
import productSlide from './redux/productSlide';
import authSlice from './redux/authSlice';

export const store = configureStore({
	reducer: {
		product: productSlide,
		auth: authSlice,
	},
});
