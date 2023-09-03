interface CustomTableProps {
	data: any[];
	columns: { label: string; key: string }[];
}

const CustomTable = ({ data, columns }: CustomTableProps) => {
	return (
		<table className="w-full min-w-max">
			<thead>
				<tr>
					{columns.map((column, ind) => (
						<th
							key={ind}
							className="text-left text-black font-normal pb-[5px] pr-4 "
						>
							{column.label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item, ind) => (
					<tr key={ind}>
						{columns.map((column, secInd) => (
							<td
								key={secInd}
								className="text-left text-[#5F5C5C] py-[13px] pr-4 "
							>
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
