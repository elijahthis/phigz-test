import { Link } from "react-router-dom";
import AuthBox from "../../components/AuthBox";
import Button from "../../components/Button";
import InputComponent from "../../components/InputComponent";
import { LoginIcon } from "../../components/svgs";
import AuthConsumer from "../../hooks/useAuth";

const Login = () => {
	const auth = AuthConsumer();
	// console.log("auth", auth);

	return (
		<div className="mt-[231px] mx-auto">
			<AuthBox maxW={668}>
				<div className="mt-4 flex flex-col items-center md:px-[111px]">
					<LoginIcon />
					<h1 className="mb-11 mt-5 text-center">Log in</h1>
					<form
						action=""
						className="flex flex-col items-stretch gap-[30px] w-full "
					>
						<InputComponent
							label="Phone Number (User ID)"
							type="text"
							placeholder="Enter 11-digit phone number"
						/>
						<InputComponent
							label="Password"
							type="password"
							placeholder="Enter password"
							labelSide={
								<Link to="/auth/forgot-password" className="text-base">
									Forgot password?
								</Link>
							}
						/>
						<Button onClick={() => {}} fullWidth={true}>
							Log in
						</Button>
						<p className="text-center ">
							Don’t have user? <Link to="/auth/register">Create account</Link>
						</p>
					</form>
				</div>
			</AuthBox>
		</div>
	);
};

export default Login;
