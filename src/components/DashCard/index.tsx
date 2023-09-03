interface DashCardProps {
	data: { label: string; value: string; icon: JSX.Element };
}

const DashCard = ({ data }: DashCardProps) => (
	<div className="border border-[#e0e6dd] px-9 py-6 pt-8 rounded-[10px] ">
		<div className="h-[34px]">{data.icon}</div>
		<p className="text-[#8F928E] mb-2 mt-[58px] ">{data.label}</p>
		<h1 className="text-left font-medium">{data.value}</h1>
	</div>
);

export default DashCard;
