import { Link, useNavigate } from "react-router-dom";
import AuthBox from "../../components/AuthBox";
import Button from "../../components/Button";
import InputComponent from "../../components/InputComponent";
import { LoginIcon, RegisterIcon } from "../../components/svgs";
import { toast } from "react-toastify";
import { FormEvent, useContext, useState } from "react";
import { registerUser } from "../../requests/auth";
import { authContext } from "../../hooks/useAuth";

const Register = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const { isLoggedIn, setIsLoggedIn, setUserObj } = useContext(authContext);

	const submitFunc = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// log values
		const {
			first_name,
			last_name,
			phone_number,
			password,
			password_confirmation,
		} = e.target as typeof e.target & {
			first_name: { value: string };
			last_name: { value: string };
			phone_number: { value: string };
			password: { value: string };
			password_confirmation: { value: string };
		};
		console.log({
			first_name: first_name.value,
			last_name: last_name.value,
			phone_number: phone_number.value,
			password: password.value,
			password_confirmation: password_confirmation.value,
			category: "Others",
		});

		// check if passwords match
		if (password.value !== password_confirmation.value) {
			toast.error("Passwords don't match");
			return;
		}

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
			const res = await registerUser({
				first_name: first_name.value,
				last_name: last_name.value,
				phone_number: phone_number.value,
				password: password.value,
				password_confirmation: password_confirmation.value,
				category: "Others",
			});
			console.log("res", res);

			if (res?.status === 200) {
				toast.success("Account created successfully");
				setIsLoggedIn(true);
				setUserObj(res.data?.user);
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
					<RegisterIcon />
					<h1 className="mb-5 mt-16 text-center">Create Account</h1>
					<p className="mb-10">
						Already have an account? <Link to="/auth/login">Login</Link>
					</p>
					<form
						action=""
						className="flex flex-col items-stretch gap-[30px] w-full pb-5 "
						onSubmit={submitFunc}
					>
						<InputComponent
							label="First Name"
							type="text"
							placeholder="Enter first name"
							name="first_name"
							required={true}
						/>
						<InputComponent
							label="Last Name"
							type="text"
							placeholder="Enter last name"
							name="last_name"
							required={true}
						/>
						<InputComponent
							label="Phone Number (User ID)"
							type="text"
							placeholder="Enter 11-digit phone number"
							name="phone_number"
							required={true}
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
							name="password"
							required={true}
						/>
						<InputComponent
							label="Confirm Password"
							type="password"
							placeholder="Enter password"
							name="password_confirmation"
							required={true}
						/>
						<p className=" text-sm mt-[-10px] mb-[10px] ">
							By creating an account you agree to our{" "}
							<Link to="#">Terms of Use</Link> and{" "}
							<Link to="#">Privacy Policy</Link>
						</p>
						<Button onClick={() => {}} fullWidth={true} loading={loading}>
							Create my account
						</Button>
					</form>
				</div>
			</AuthBox>
		</div>
	);
};

export default Register;
