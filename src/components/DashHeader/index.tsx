import { NotificationIcon, PaperIcon, ProfileIcon } from "../svgs";
import { useLocation } from "react-router-dom";

interface DashHeaderProps {
	routeList: { label: string; route: string; icon: JSX.Element }[];
}

const DashHeader = ({ routeList }: DashHeaderProps) => {
	const location = useLocation();

	console.log(location);
	return (
		<header className="bg-white flex flex-row items-center gap-4 justify-between py-[30px] px-[50px] border-b border-[#E0E6DD] ">
			<h1>
				{routeList.filter((item) => item.route === location.pathname)[0]
					?.label ?? "404"}
			</h1>
			<div className="flex flex-row items-center gap-8 cursor-pointer">
				<PaperIcon />
				<NotificationIcon />
				<ProfileIcon />
			</div>
		</header>
	);
};

export default DashHeader;
