import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";

const Header = () => {
	const routeList: { label: string; route: string }[] = [
		{ label: "About Us", route: "/about-us" },
		{ label: "FAQs", route: "/faqs" },
	];
	const navigate = useNavigate();

	return (
		<header className="fixed top-0 w-full flex flex-row items-center justify-end gap-10 py-[23px] px-[50px] bg-white z-30">
			{routeList.map((routeItem, ind) => (
				<Link
					to={routeItem.route}
					className="text-sm text-sec-dark font-medium"
					key={ind}
				>
					{routeItem.label}
				</Link>
			))}
			<div className="flex flex-row items-center gap-3">
				<Button
					onClick={() => {
						navigate("/auth/login");
					}}
					variant="outline"
				>
					Log In
				</Button>
				<Button
					onClick={() => {
						navigate("/auth/register");
					}}
				>
					Create free account
				</Button>
			</div>
		</header>
	);
};

export default Header;
