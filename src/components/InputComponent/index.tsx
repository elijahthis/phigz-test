interface InputComponentProps {
	label: string;
	labelSide?: JSX.Element | string;
	type: string;
	placeholder?: string;
}

const InputComponent = ({
	label,
	labelSide,
	type,
	placeholder,
}: InputComponentProps) => {
	return (
		<label htmlFor="" className="flex flex-col items-stretch gap-2">
			<span className="flex flex-row items-center gap-4 justify-between text-sm">
				{label}
				{labelSide ?? ""}
			</span>
			<input
				type={type}
				className="w-full px-5 py-4 rounded-[10px] placeholder-[#C7C9C7] bg-white border border-[#E0E6DD] "
				placeholder={placeholder}
			/>
		</label>
	);
};

export default InputComponent;
