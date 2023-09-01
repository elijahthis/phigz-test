import Button from "../Button";

const Header = () => {
	const routeList: { label: string; route: string }[] = [
		{ label: "About Us", route: "/about-us" },
		{ label: "FAQs", route: "/faqs" },
	];

	return (
		<header>
			<ul>
				{routeList.map((routeItem) => (
					<div></div>
				))}
				<div>
					<Button onClick={() => {}}>Log In</Button>
					<Button onClick={() => {}}>Create free account</Button>
				</div>
			</ul>
		</header>
	);
};

export default Header;
