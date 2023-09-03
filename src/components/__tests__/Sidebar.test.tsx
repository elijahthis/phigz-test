import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar";

const navList = ["Home", "Wallet", "Account"];
const routeList: { label: string; route: string; icon: JSX.Element }[] = [
	{ label: "Home", route: "/", icon: <></> },
	{ label: "Wallet", route: "/wallet", icon: <></> },
	{ label: "Account", route: "/account", icon: <></> },
];
const routeList_2: { label: string; route: string; icon: JSX.Element }[] = [
	{
		label: "Customer Support",
		route: "/customer-support",
		icon: <></>,
	},
	{ label: "Settings", route: "/settings", icon: <></> },
];

test("renders the Sidebar component", () => {
	render(
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Sidebar
							openNav={true}
							setOpenNav={jest.fn()}
							routeList={routeList}
							routeList_2={routeList_2}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);

	// Test if each sidebar item renders the correct text
	[...routeList, ...routeList_2]
		.map((item) => item.label)
		.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());

	// Test if each user's profile picture renders
	// expect(screen.getAllByAltText("profile picture")[0]).toBeInTheDocument();
});
