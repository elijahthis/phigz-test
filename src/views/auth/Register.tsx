import { Link } from "react-router-dom";
import AuthBox from "../../components/AuthBox";
import Button from "../../components/Button";
import InputComponent from "../../components/InputComponent";
import { LoginIcon, RegisterIcon } from "../../components/svgs";
import AuthConsumer from "../../hooks/useAuth";

const Register = () => {
	return (
		<div className="mt-24 md:mt-[231px] mx-auto">
			<AuthBox maxW={668}>
				<div className="mt-4 flex flex-col items-center md:px-[111px]">
					<RegisterIcon />
					<h1 className="mb-5 mt-16 text-center">Create Account</h1>
					<p className="mb-10">
						Already have an account? <Link to="/auth/login">Login</Link>
					</p>
					<form
						action=""
						className="flex flex-col items-stretch gap-[30px] w-full pb-5 "
					>
						<InputComponent
							label="First Name"
							type="text"
							placeholder="Enter first name"
						/>
						<InputComponent
							label="Last Name"
							type="text"
							placeholder="Enter last name"
						/>
						<InputComponent
							label="Phone Number (User ID)"
							type="text"
							placeholder="Enter 11-digit phone number"
						/>
						<InputComponent
							label="NIN (National Identification Number)"
							type="text"
							placeholder="Enter NIN"
						/>
						<InputComponent
							label="Email"
							type="email"
							placeholder="Enter email"
						/>
						<InputComponent
							label="Password"
							type="password"
							placeholder="Enter password"
						/>
						<p className=" text-sm mt-[-10px] mb-[10px] ">
							By creating an account you agree to our{" "}
							<Link to="#">Terms of Use</Link> and{" "}
							<Link to="#">Privacy Policy</Link>
						</p>
						<Button onClick={() => {}} fullWidth={true}>
							Create my account
						</Button>
					</form>
				</div>
			</AuthBox>
		</div>
	);
};

export default Register;
