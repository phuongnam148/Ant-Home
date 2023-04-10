import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newRequest from '../utils/newRequest.js';
// import Cookies from 'js-cookie';

// Thunk action để gửi yêu cầu đăng nhập đến server
export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
	const response = await newRequest.post('/auth', { email, password });
	return response.data;
});
// Đã check đăng nhập thành công!

// Slice để quản lý state liên quan đến đăng nhập
const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuthenticated: false,
		isLoading: false,
		role: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isAuthenticated = true;
				state.isLoading = false;
				state.error = null;
				state.role = action.payload.role;
			})
			.addCase(login.rejected, (state, action) => {
				state.isAuthenticated = false;
				state.isLoading = false;
				state.error = action.error.message;
				state.role = null;
			});
	},
});

export default authSlice.reducer;
