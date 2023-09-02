import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import AuthConsumer from "./hooks/useAuth";
import NotFound from "./views/not-found";
import ForgotPassword from "./views/auth/ForgotPassword";
import OTPPage from "./views/auth/OTP";
import VerificationStatus from "./views/auth/VerificationStatus";

function App() {
	const auth = AuthConsumer();

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/auth" element={<AuthLayout />}>
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="forgot-password" element={<ForgotPassword />} />
						<Route path="otp" element={<OTPPage />} />
						<Route path="status" element={<VerificationStatus />} />
					</Route>
					<Route
						path="/"
						element={<ProtectedRoute isLoggedIn={auth.isLoggedIn} />}
					>
						<Route path="home" element={<Login />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
