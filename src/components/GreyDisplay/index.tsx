const GreyDisplay = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<div className="py-[30px] px-9 bg-[#F4F2F6] rounded-[20px] ">
			{children}
		</div>
	);
};

export default GreyDisplay;
