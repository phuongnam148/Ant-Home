/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
	// Kiểm tra auth
	const { auth } = useAuth();
	const location = useLocation();

	return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
		<Outlet />
	) : auth?.user ? (
		<Navigate to='/unauthorized' state={{ from: location }} replace />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);
};

export default RequireAuth;
