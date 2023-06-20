/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { Outlet, Navigate } from 'react-router-dom';
import newRequest from './newRequest';
import React, { useEffect, useState } from 'react';

// Nhận vào Element, Role
const PrivateRoute = ({ role }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		newRequest
			.post('/checkuser')
			.then((res) => {
				setIsAuthenticated(res.data);
				setIsLoading(false);
			})
			.catch((error) => setIsLoading(false));
	}, []);

	if (isLoading) return <div>Loading....</div>;
	if (isAuthenticated === null) return <Navigate to='/login' />;
	if (role.includes(isAuthenticated)) {
		return <Outlet />;
	} else {
		return <Navigate to='/unauthorized' />;
	}
};
export default PrivateRoute;
