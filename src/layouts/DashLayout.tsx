import { useState } from "react";
import DashHeader from "../components/DashHeader";
import Sidebar from "../components/Sidebar";
import {
	AccountIcon,
	CustomerSupportIcon,
	HomeIcon,
	SettingsIcon,
	WalletIcon,
} from "../components/svgs";

const DashLayout = ({ children }: { children: JSX.Element }) => {
	const routeList: { label: string; route: string; icon: JSX.Element }[] = [
		{ label: "Home", route: "/", icon: <HomeIcon /> },
		{ label: "Wallet", route: "/wallet", icon: <WalletIcon /> },
		{ label: "Account", route: "/account", icon: <AccountIcon /> },
	];
	const routeList_2: { label: string; route: string; icon: JSX.Element }[] = [
		{
			label: "Customer Support",
			route: "/customer-support",
			icon: <CustomerSupportIcon />,
		},
		{ label: "Settings", route: "/settings", icon: <SettingsIcon /> },
	];
	const [openNav, setOpenNav] = useState(false);

	return (
		<main className=" ">
			<Sidebar
				routeList={routeList}
				routeList_2={routeList_2}
				openNav={openNav}
				setOpenNav={setOpenNav}
			/>
			<div className="bg-white min-h-screen lg:ml-[360px]">
				<DashHeader routeList={routeList} />
				<div className="px-0 py-8 lg:px-[50px] px-8 lg:py-8 h-full">
					{children}
				</div>
			</div>
		</main>
	);
};

export default DashLayout;
