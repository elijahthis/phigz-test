import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AuthLayout = () => {
	return (
		<main>
			<Header />
			<Outlet />
		</main>
	);
};

export default AuthLayout;
