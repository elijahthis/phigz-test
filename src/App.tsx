import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import NotFound from "./views/not-found";
import ForgotPassword from "./views/auth/ForgotPassword";
import OTPPage from "./views/auth/OTP";
import VerificationStatus from "./views/auth/VerificationStatus";
import Home from "./views/dash/Home";
import DashLayout from "./layouts/DashLayout";
import { authContext } from "./hooks/useAuth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className="App">
			<authContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
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
							element={
								<DashLayout>
									<ProtectedRoute isLoggedIn={isLoggedIn} />
								</DashLayout>
							}
						>
							<Route index element={<Home />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
					<ToastContainer
						position="bottom-center"
						// autoClose={false}
						autoClose={5000}
						hideProgressBar={true}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover={true}
						transition={Zoom}
					/>
				</BrowserRouter>
			</authContext.Provider>
		</div>
	);
}

export default App;
