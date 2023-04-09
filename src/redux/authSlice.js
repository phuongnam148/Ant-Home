import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newRequest from '../utils/newRequest.js';

// Thunk action để gửi yêu cầu đăng nhập đến server
export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
	const response = await newRequest.post('/auth', { email, password });
	console.log(response);
	return response.data;
});
// Đã check đăng nhập thành công!

// Slice để quản lý state liên quan đến đăng nhập
const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		isAuthenticated: false,
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isAuthenticated = true;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(login.rejected, (state, action) => {
				state.user = null;
				state.isAuthenticated = false;
				state.isLoading = false;
				state.error = action.error.message;
			});
	},
});

export default authSlice.reducer;
