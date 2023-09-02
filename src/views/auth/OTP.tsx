import { useState } from "react";
import AuthBox from "../../components/AuthBox";
import Button from "../../components/Button";
import { OTPIcon } from "../../components/svgs";
import OtpInput from "react-otp-input";

const OTPPage = () => {
	const [otp, setOtp] = useState("");

	return (
		<div className="mt-[231px] mx-auto">
			<AuthBox maxW={668}>
				<div className="mt-4 flex flex-col items-center md:px-[102px] pb-6">
					<OTPIcon />
					<h1 className="mt-[22px] mb-8 text-center">
						Verify your phone number
					</h1>
					<p className="mb-9 text-center">
						A 6-digit One Time Password (OTP) has been sent to{" "}
						<span className="font-semibold">08012345678</span>. Enter the OTP
						below to complete your account registration
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
						<Button variant="text" onClick={() => {}} className="px-0">
							Edit phone number
						</Button>
						<Button variant="text" onClick={() => {}} className="px-0">
							Resend message
						</Button>
					</div>
				</div>
			</AuthBox>
		</div>
	);
};

export default OTPPage;
