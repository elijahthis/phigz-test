import { FormEvent, useEffect, useState } from "react";
import AuthBox from "../../components/AuthBox";
import Button from "../../components/Button";
import { OTPIcon } from "../../components/svgs";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { requestPasswordResetToken, verifyOTP } from "../../requests/auth";

const OTPPage = () => {
	const [otp, setOtp] = useState("");
	const [loading, setLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const navigate = useNavigate();

	const sendRequest = async (token: string) => {
		try {
			setLoading(true);
			const res = await verifyOTP({
				token: token,
			});
			console.log("res", res);

			if (res?.status === 200) {
				toast.success("OTP Confirmed!");
				navigate(`/auth/login`);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const resendOTP = async () => {
		try {
			setLoading(true);
			const res = await requestPasswordResetToken({
				// get phone number from query params
				phone_number: searchParams.get("phone_number") || "",
			});
			console.log("res", res);

			if (res?.status === 200) {
				toast.success("OTP Resent");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (otp.length === 6) {
			sendRequest(otp);
		}
	}, [otp]);

	return (
		<div className="mt-24 md:mt-[231px] mx-auto">
			<AuthBox
				maxW={668}
				onClose={() => {
					navigate("/auth/login");
				}}
			>
				<div className="mt-4 flex flex-col items-center md:px-[102px] pb-6">
					<OTPIcon />
					<h1 className="mt-[22px] mb-8 text-center">
						Verify your phone number
					</h1>
					<p className="mb-9 text-center">
						A 6-digit One Time Password (OTP) has been sent to{" "}
						<span className="font-semibold">
							{searchParams.get("phone_number") ?? ""}
						</span>
						. Enter the OTP below to complete your account registration
					</p>
					<div className="mb-[72px]">
						<OtpInput
							value={otp}
							onChange={setOtp}
							numInputs={6}
							// renderSeparator={<span>-</span>}
							renderInput={(props) => (
								<input
									{...props}
									className="md:text-2xl text-xl md:p-4 px-2 py-4 rounded-[10px]  "
								/>
							)}
							inputStyle={{ width: "46px" }}
							containerStyle={{ gap: "15px" }}
						/>
					</div>
					<div className="w-full flex md:flex-row flex-col items-center md:justify-around md:gap-3">
						<Button
							variant="text"
							onClick={() => {
								navigate("/auth/forgot-password");
							}}
							className="px-0"
						>
							Edit phone number
						</Button>
						<Button
							variant="text"
							onClick={() => {
								resendOTP();
							}}
							className="px-0"
						>
							Resend message
						</Button>
					</div>
				</div>
			</AuthBox>
		</div>
	);
};

export default OTPPage;
