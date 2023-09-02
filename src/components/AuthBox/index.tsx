import { CloseIcon } from "../svgs";

interface AuthBoxProps {
	children: JSX.Element | JSX.Element[];
	maxW: number;
}

const AuthBox = ({ children, maxW }: AuthBoxProps) => {
	return (
		<div
			className={`bg-[#F4F2F6] p-10 max-w-[${maxW}px] w-screen relative md:rounded-[30px] `}
			style={{ maxWidth: `${maxW}px` }}
		>
			{children}
			<CloseIcon
				className="absolute top-10 right-10 cursor-pointer"
				onClick={() => {}}
			/>
		</div>
	);
};

export default AuthBox;
