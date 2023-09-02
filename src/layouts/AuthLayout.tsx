import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AuthLayout = () => {
	return (
		<main className="">
			<Header />
			<div className="flex pb-20">
				<Outlet />
			</div>
		</main>
	);
};

export default AuthLayout;
