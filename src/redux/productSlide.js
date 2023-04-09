import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newRequest from '../utils/newRequest.js';

export const getProductData = createAsyncThunk('data/fetchData', async () => {
	const response = await newRequest.get('/products');
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
			});
	},
});

export default productSlice.reducer;
