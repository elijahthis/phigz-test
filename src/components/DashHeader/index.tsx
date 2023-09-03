import { useState } from "react";
import { deleteToken } from "../../config/helpers";
import { NotificationIcon, PaperIcon, ProfileIcon } from "../svgs";
import { useLocation, useNavigate } from "react-router-dom";

interface DashHeaderProps {
	routeList: { label: string; route: string; icon: JSX.Element }[];
}

const DashHeader = ({ routeList }: DashHeaderProps) => {
	const location = useLocation();

	const [showPopover, setShowPopover] = useState(false);

	console.log(location);
	return (
		<header className="bg-white flex flex-row items-center gap-4 justify-between py-[30px] px-[50px] border-b border-[#E0E6DD] ">
			<h1>
				{routeList.filter((item) => item.route === location.pathname)[0]
					?.label ?? "404"}
			</h1>
			<div className="flex flex-row items-center gap-8 cursor-pointer relative">
				<PaperIcon />
				<NotificationIcon />
				<ProfileIcon onClick={() => setShowPopover((val) => !val)} />
				{showPopover && <PopUpModal />}
			</div>
		</header>
	);
};

const PopUpModal = () => {
	const navigate = useNavigate();

	return (
		<div className="absolute right-0 top-[2.5rem] bg-white border border-[#E0E6DD] py-4 px-6 rounded-lg ">
			<p className="mb-2">Hi {"User"}</p>
			<p
				className="text-pry-col select-none "
				onClick={() => {
					deleteToken();
					navigate("/auth/login");
				}}
			>
				Logout
			</p>
		</div>
	);
};

export default DashHeader;
