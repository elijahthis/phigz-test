interface CustomTableProps {
	data: any[];
	columns: { label: string; key: string }[];
}

const CustomTable = ({ data, columns }: CustomTableProps) => {
	return (
		<table className="w-full">
			<thead>
				<tr>
					{columns.map((column, ind) => (
						<th
							key={ind}
							className="text-left text-black font-normal pb-[5px] "
						>
							{column.label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item, ind) => (
					<tr key={ind}>
						{columns.map((column, ind) => (
							<td key={ind} className="text-left text-[#5F5C5C] py-[13px] ">
								{item[column.key]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CustomTable;