export const getToken = () => {
	return localStorage.getItem("FUEL_TKN");
};

export const setAuthToken = (token) => {
	localStorage.setItem("FUEL_TKN", token);
};

export const deleteToken = () => {
	return localStorage.removeItem("FUEL_TKN");
};
