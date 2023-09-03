import Button from "../../components/Button";
import CustomTable from "../../components/CustomTable";
import DashCard from "../../components/DashCard";
import GreyDisplay from "../../components/GreyDisplay";
import {
	AccountIcon,
	EyeIcon,
	FuelIcon,
	PurchaseIcon,
	StationsIcon,
} from "../../components/svgs";
import { Link } from "react-router-dom";

const Home = () => {
	const dashCards: {
		label: string;
		value: string;
		icon: JSX.Element;
	}[] = [
		{ label: "Fuel purchases", value: "24", icon: <FuelIcon /> },
		{ label: "Total purchases", value: "₦155k", icon: <PurchaseIcon /> },
		{ label: "Account", value: "47", icon: <AccountIcon /> },
		{ label: "Used Stations", value: "2", icon: <StationsIcon /> },
	];

	const transactionColumns = [
		{ label: "Filling Station", key: "filling_station" },
		{ label: "Employee Name", key: "employee_name" },
		{ label: "Total Fuel Purchase", key: "total_fuel_purchase" },
		{ label: "Date", key: "date" },
	];
	const transactionList: {
		filling_station: string;
		employee_name: string;
		total_fuel_purchase: string;
		date: string;
	}[] = [
		{
			filling_station: "Total Toyin Ikeja",
			employee_name: "Ola",
			total_fuel_purchase: "₦4,000",
			date: "03/10/2022 11:20am",
		},
		{
			filling_station: "Total Toyin Ikeja",
			employee_name: "Ola",
			total_fuel_purchase: "₦4,000",
			date: "03/10/2022 11:20am",
		},
		{
			filling_station: "Total Toyin Ikeja",
			employee_name: "Ola",
			total_fuel_purchase: "₦4,000",
			date: "03/10/2022 11:20am",
		},
	];

	return (
		<div>
			<div className="mb-6">All time</div>
			<div className="grid grid-cols-4 gap-6 mb-[50px] ">
				{dashCards.map((dashItem) => (
					<DashCard data={dashItem} />
				))}
			</div>
			<div>
				<div className="flex flex-row items-center gap-4 justify-between mb-3">
					<h2>Wallet</h2>
					<Link to="#">See details</Link>
				</div>
				<GreyDisplay>
					<div className="flex flex-row items-center gap-4 justify-between pb-6 mb-[30px] border-b border-[#E0E6DD] ">
						<div>
							<div className="mb-4 flex flex-row items-center gap-5">
								<p className="text-[#8F928E]">Corporate balance</p>
								<EyeIcon className="cursor-pointer" />
							</div>
							<h1 className="text-left font-medium">₦95,520.00</h1>
						</div>
						<Button onClick={() => {}}>Fund Wallet</Button>
					</div>
					<div className="flex flex-row items-center gap-4 justify-between mb-[22px]">
						<p className="text-[18px] text-main-dark font-semibold ">
							Recent Transactions
						</p>
						<p className="cursor-pointer text-pry-col ">See all</p>
					</div>
					<CustomTable columns={transactionColumns} data={transactionList} />
				</GreyDisplay>
			</div>
		</div>
	);
};

export default Home;
