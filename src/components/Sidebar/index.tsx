import { Link, useLocation } from "react-router-dom";
import { Dispatch, SetStateAction, useRef, useState } from "react";

interface SidebarProps {
	routeList: { label: string; route: string; icon: JSX.Element }[];
	routeList_2: { label: string; route: string; icon: JSX.Element }[];
	openNav: boolean;
	setOpenNav: Dispatch<SetStateAction<boolean>>;
}
interface SideItemProps {
	label: string;
	route: string;
	icon: JSX.Element;
	active: boolean;
}

const Sidebar = ({
	routeList,
	routeList_2,
	openNav,
	setOpenNav,
}: SidebarProps) => {
	const location = useLocation();

	return (
		<aside
			className={` lg:flex lg:flex-col  w-[360px] bg-white fixed top-0 lg:top-0 lg:left-0 h-screen pt-[88px] pb-[78px] pl-7 pr-10 overflow-y-auto border-r border-[#E0E6DD] ${
				openNav ? "left-0" : "left-[-100%]"
			} transition-all duration-500 z-20`}
		>
			<div className="flex flex-col gap-1 py-8 border-b border-[#E0E6DD] ">
				{routeList.map((routeItem, ind) => (
					<SideItem
						label={routeItem.label}
						route={routeItem.route}
						key={ind}
						icon={routeItem.icon}
						active={routeItem.route === location.pathname}
					/>
				))}
			</div>
			<div className="flex flex-col items-stretch gap-1 justify-between pt-8 flex-grow ">
				{routeList_2.map((routeItem, ind) => (
					<SideItem
						label={routeItem.label}
						route={routeItem.route}
						key={ind}
						icon={routeItem.icon}
						active={routeItem.route === location.pathname}
					/>
				))}
			</div>
		</aside>
	);
};

export default Sidebar;

const SideItem = ({ label, route, icon, active }: SideItemProps) => (
	<Link
		to={route}
		className={`py-4 px-[22px]  rounded-[10px] flex flex-row items-center gap-4 text-[18px] ${
			active ? "bg-[#F4F2F6] text-pry-col" : "bg-transparent text-[#8F928E] "
		} `}
	>
		{icon}
		{label}
	</Link>
);
