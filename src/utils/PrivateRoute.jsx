/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { Outlet, Navigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Nhận vào Element, Role
const PrivateRoute = ({ role }) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const isRole = useSelector((state) => state.auth.role);
	if (!isAuthenticated) return <Navigate to='/login' />;
	if (isAuthenticated == true && role.includes(isRole)) {
		return <Outlet />;
	} else {
		return <Navigate to='/unauthorized' />;
	}
};

export default PrivateRoute;
