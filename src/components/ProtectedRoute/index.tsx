import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
	isLoggedIn: boolean;
}

const ProtectedRoute = ({ isLoggedIn }: ProtectedRouteProps) => {
	return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
