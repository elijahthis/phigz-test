import { createContext, useContext, useState } from "react";

interface useAuthProps {
	isLoggedIn: boolean;
	logInFunc: () => void;
	logoutFunc: () => void;
}

const authContext = createContext<useAuthProps>({
	isLoggedIn: false,
	logInFunc: () => {},
	logoutFunc: () => {},
});

export const useAuth = (): useAuthProps => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return {
		isLoggedIn,
		logInFunc() {
			return new Promise((resolve) => {
				setIsLoggedIn(true);
				resolve("logged in foo");
			});
		},
		logoutFunc() {
			return new Promise((resolve) => {
				setIsLoggedIn(true);
				resolve("logged in foo");
			});
		},
	};
};

export function AuthProvider({ children }: { children: JSX.Element }) {
	const auth = useAuth();

	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

const AuthConsumer = (): useAuthProps => {
	return useContext(authContext);
};
export default AuthConsumer;
