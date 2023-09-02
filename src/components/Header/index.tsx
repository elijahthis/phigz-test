import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { CloseIcon, MenuIcon } from "../svgs";
import { useState } from "react";

interface HeaderMenuProps {
	routeList: { label: string; route: string }[];
	openSide: boolean;
	toggleFunc: (openSide: boolean) => void;
}

const Header = () => {
	const routeList: { label: string; route: string }[] = [
		{ label: "About Us", route: "/about-us" },
		{ label: "FAQs", route: "/faqs" },
	];
	const navigate = useNavigate();
	const [openSide, setOpenSide] = useState(false);

	return (
		<header className="fixed top-0 w-full  py-[23px] md:px-[50px] px-[40px] bg-white z-30 flex">
			<div className="w-full md:flex flex-row items-center justify-end gap-10 hidden">
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
			</div>
			<MenuIcon
				className="md:hidden inline ml-auto cursor-pointer"
				onClick={() => setOpenSide(true)}
			/>
			<HeaderMenu
				routeList={routeList}
				openSide={openSide}
				toggleFunc={(val: boolean) => setOpenSide(val)}
			/>
		</header>
	);
};

const HeaderMenu = ({ routeList, openSide, toggleFunc }: HeaderMenuProps) => {
	const navigate = useNavigate();

	return (
		<aside
			className={`h-screen w-screen fixed top-0 left-0 bg-white py-20 px-4 flex flex-col items-start gap-5 transition-all duration-500 `}
			style={{ left: openSide ? "0" : "-100vw" }}
		>
			{routeList.map((routeItem, ind) => (
				<Link
					to={routeItem.route}
					className="text-4xl text-sec-dark font-medium"
					key={ind}
					onClick={() => toggleFunc(false)}
				>
					{routeItem.label}
				</Link>
			))}
			<div className="my-4"></div>
			<Button
				onClick={() => {
					navigate("/auth/login");
					toggleFunc(false);
				}}
				variant="outline"
				fullWidth={true}
			>
				Log In
			</Button>
			<Button
				onClick={() => {
					navigate("/auth/register");
					toggleFunc(false);
				}}
				fullWidth={true}
			>
				Create free account
			</Button>
			<CloseIcon
				className="absolute top-6 right-6"
				onClick={() => {
					toggleFunc(false);
				}}
			/>
		</aside>
	);
};

export default Header;
