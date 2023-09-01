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

function App() {
	const auth = AuthConsumer();

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/auth" element={<AuthLayout />}>
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
					</Route>
					<Route
						path="/"
						element={<ProtectedRoute isLoggedIn={auth.isLoggedIn} />}
					>
						<Route path="home" element={<Login />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
