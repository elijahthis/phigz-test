import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { fetchUserData } from "../../requests/user";
import { authContext } from "../../hooks/useAuth";
import { BiLoaderIcon } from "../svgs";

const ProtectedRoute = () => {
	const { isLoggedIn, setIsLoggedIn, setUserObj } = useContext(authContext);
	const [authed, setAuthed] = useState(false);

	useEffect(() => {
		const fetchFunc = async () => {
			try {
				if (!isLoggedIn) {
					const res = await fetchUserData();
					console.log(res);
					if (res.status === 200) {
						setIsLoggedIn(true);
						setUserObj(res.data?.user);
					}
				}
			} catch (error) {
				console.log(error);
			} finally {
				setAuthed(true);
			}
		};
		fetchFunc();
	}, []);

	return !authed ? (
		<>
			<BiLoaderIcon className="loader" />
		</>
	) : isLoggedIn ? (
		<Outlet />
	) : (
		<Navigate to="/auth/login" replace />
	);
};

export default ProtectedRoute;
