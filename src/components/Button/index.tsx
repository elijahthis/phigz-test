interface ButtonProps {
	variant?: "fill" | "outline" | "text";
	children: string | JSX.Element;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	size?: "md" | "lg";
	fullWidth?: boolean;
}

const Button = ({
	variant = "fill",
	children,
	onClick,
	className = "",
	disabled = false,
	type = "button",
	size = "lg",
	fullWidth = true,
}: ButtonProps) => {
	return (
		<button className="bg-pry-col text-white cursor-pointer" onClick={() => {}}>
			{children}
		</button>
	);
};

export default Button;
