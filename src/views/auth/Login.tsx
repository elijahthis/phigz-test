import { Link, useNavigate } from "react-router-dom";
import AuthBox from "../../components/AuthBox";
import Button from "../../components/Button";
import InputComponent from "../../components/InputComponent";
import { LoginIcon } from "../../components/svgs";
import { FormEvent, useContext, useState } from "react";
import { authContext } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { userLogin } from "../../requests/auth";

const Login = () => {
	// console.log("auth", auth);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const { isLoggedIn, setIsLoggedIn } = useContext(authContext);

	const submitFunc = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// log values
		const { phone_number, password } = e.target as typeof e.target & {
			phone_number: { value: string };
			password: { value: string };
		};
		console.log({
			phone_number: phone_number.value,
			password: password.value,
		});

		// check if phone number is 11 digits
		if (phone_number.value.length !== 11) {
			toast.error("Phone number must be 11 digits");
			return;
		}

		// check if phone number is all digits
		if (!/^\d+$/.test(phone_number.value)) {
			toast.error("Phone number must be all digits");
			return;
		}

		try {
			setLoading(true);
			const res = await userLogin({
				phone_number: phone_number.value,
				password: password.value,
			});
			console.log("res", res);

			if (res?.status === 200) {
				toast.success("Login successful");
				setIsLoggedIn(true);
				navigate("/");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="mt-24 md:mt-[231px] mx-auto">
			<AuthBox maxW={668}>
				<div className="mt-4 flex flex-col items-center md:px-[111px]">
					<LoginIcon />
					<h1 className="mb-11 mt-5 text-center">Log in</h1>
					<form
						action=""
						className="flex flex-col items-stretch gap-[30px] w-full "
						onSubmit={submitFunc}
					>
						<InputComponent
							label="Phone Number (User ID)"
							type="text"
							placeholder="Enter 11-digit phone number"
							name="phone_number"
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
							name="password"
						/>
						<Button onClick={() => {}} fullWidth={true} loading={loading}>
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
