import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newRequest from '../utils/newRequest.js';

// Lấy tất cả sản phẩm
export const getProductData = createAsyncThunk('data/fetchProductData', async () => {
	const response = await newRequest.get('/products');
	return response.data;
});
// Lấy thông tin sản phẩm theo ID
export const getProductByID = createAsyncThunk('data/fetchProductById', async (id) => {
	const response = await newRequest.get(`/product?id=${id}`);
	return response.data;
});

const productSlice = createSlice({
	name: 'products',
	initialState: {
		status: 'idle',
		data: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Lấy tất cả sản phẩm
			.addCase(getProductData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getProductData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(getProductData.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})

			// Lấy sản phẩm theo ID
			.addCase(getProductByID.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getProductByID.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.selectedProduct = action.payload;
			})
			.addCase(getProductByID.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default productSlice.reducer;
