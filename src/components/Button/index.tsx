import { MouseEvent } from "react";
import { BiLoaderIcon } from "../svgs";

interface ButtonProps {
	variant?: "fill" | "outline" | "text";
	children: string | JSX.Element;
	onClick: () => void;
	className?: string;
	loading?: boolean;
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
	loading = false,
	disabled = false,
	type = "button",
	size = "lg",
	fullWidth = false,
}: ButtonProps) => {
	return (
		<button
			className={`font-medium ${
				variant === "fill"
					? "bg-pry-col text-white"
					: variant === "outline"
					? "bg-transparent text-pry-col border border-pry-col"
					: "bg-transparent text-pry-col"
			} ${
				fullWidth ? "w-full" : "w-max"
			} cursor-pointer rounded-[10px] px-5 py-3 flex items-center justify-center ${className}`}
			onClick={(e: MouseEvent<HTMLButtonElement>) => {
				if (disabled) e.preventDefault();
				else if (!loading) onClick && onClick();
			}}
		>
			{loading ? <BiLoaderIcon className="loader" /> : children}
		</button>
	);
};

export default Button;
