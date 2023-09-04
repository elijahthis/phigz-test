import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AuthBox from "../../components/AuthBox";
import Button from "../../components/Button";
import InputComponent from "../../components/InputComponent";
import { ForgotPasswordIcon } from "../../components/svgs";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { requestPasswordResetToken } from "../../requests/auth";

const ForgotPassword = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const submitFunc = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// log values
		const { phone_number } = e.target as typeof e.target & {
			phone_number: { value: string };
		};

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
			const res = await requestPasswordResetToken({
				phone_number: phone_number.value,
			});
			console.log("res", res);

			if (res?.status === 200) {
				toast.success("OTP Sent");
				navigate(`/auth/otp?phone_number=${phone_number.value}`);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="mt-24 md:mt-[231px] mx-auto">
			<AuthBox
				maxW={668}
				onClose={() => {
					navigate("/auth/login");
				}}
			>
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
						onSubmit={submitFunc}
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
								name="phone_number"
							/>
						)}

						<Button
							onClick={() => {}}
							fullWidth={true}
							className="mt-[5px]"
							loading={loading}
						>
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
