import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<main className="grid place-items-center w-full h-screen">
			<div className="flex flex-col items-center">
				<h1 className="mb-2">Coming Soon.</h1>
				<p className="mb-6">The resource you requested is in the kitchen.</p>
				<div className="flex flex-row items-center gap-4">
					<Button
						onClick={() => {
							navigate("/");
						}}
					>
						Dashboard
					</Button>
					<Button
						onClick={() => {
							navigate("/auth/login");
						}}
						variant="outline"
					>
						Login
					</Button>
				</div>
			</div>
		</main>
	);
};

export default NotFound;
