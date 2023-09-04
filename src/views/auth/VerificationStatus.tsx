import AuthBox from "../../components/AuthBox";
import Button from "../../components/Button";
import { SuccessIcon } from "../../components/svgs";
import { Link, useNavigate } from "react-router-dom";

const VerificationStatus = () => {
	const navigate = useNavigate();

	return (
		<div className="mt-24 md:mt-[231px] mx-auto">
			<AuthBox
				maxW={668}
				onClose={() => {
					navigate("/auth/login");
				}}
			>
				<div className="mt-4 flex flex-col items-center md:px-[111px] pb-6">
					<SuccessIcon />
					<h1 className="mt-6 mb-8 text-center">Verification successful!</h1>
					<p className="mb-8 text-center">
						Your registration is complete. Log in below to start enjoying easier
						and faster fuel purchases
					</p>
					<Button
						onClick={() => {
							navigate("/auth/login");
						}}
						fullWidth={true}
					>
						Continue to login
					</Button>
				</div>
			</AuthBox>
		</div>
	);
};

export default VerificationStatus;
