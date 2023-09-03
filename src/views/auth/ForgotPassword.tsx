import { Link, useSearchParams } from "react-router-dom";
import AuthBox from "../../components/AuthBox";
import Button from "../../components/Button";
import InputComponent from "../../components/InputComponent";
import { ForgotPasswordIcon } from "../../components/svgs";

const ForgotPassword = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<div className="mt-24 md:mt-[231px] mx-auto">
			<AuthBox maxW={668}>
				<div className="mt-4 flex flex-col items-center md:px-[111px] text-center">
					<ForgotPasswordIcon />
					<h1 className="mb-8 mt-[22px]">Forgot your password?</h1>
					<p className="mb-11">
						No worries! Enter your FuelCredit registered phone number below and
						we would help you get back into your account
					</p>
					<form
						action=""
						className="flex flex-col items-stretch gap-[30px] w-full pb-6 "
					>
						{searchParams.get("method") === "email" ? (
							<InputComponent
								label="Email"
								type="email"
								placeholder="Enter email"
							/>
						) : (
							<InputComponent
								label="Phone Number (User ID)"
								type="text"
								placeholder="Enter 11-digit phone number"
							/>
						)}

						<Button onClick={() => {}} fullWidth={true} className="mt-[5px]">
							Continue
						</Button>
						<Link
							to={`?method=${
								searchParams.get("method") === "email" ? "phone" : "email"
							}`}
							className="text-center "
						>
							Recover password with{" "}
							{searchParams.get("method") === "email"
								? "Phone Number (User ID)"
								: "email"}
						</Link>
					</form>
				</div>
			</AuthBox>
		</div>
	);
};

export default ForgotPassword;
