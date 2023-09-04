import { request } from "../utils/axios";
import { AuthRequest } from "../utils/axios";
import { setAuthToken } from "../config/helpers";
import { toast } from "react-toastify";

export const userLogin = async (values) => {
	try {
		const res = await AuthRequest.post("user/login", values);
		console.log(res);
		setAuthToken(res?.data?.token);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		toast.error(err?.response?.data?.message);
		throw err;
	}
};

export const registerUser = async (values) => {
	try {
		const res = await AuthRequest.post("user/register", values);
		console.log(res);
		setAuthToken(res?.data?.token);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		toast.error(err?.response?.data?.message);
		throw err;
	}
};

export const requestPasswordResetToken = async (values) => {
	try {
		const res = await AuthRequest.post("user/password/request", values);
		console.log(res);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		console.log(err?.response?.data?.message);
		throw err;
	}
};

export const verifyOTP = async (values) => {
	try {
		const res = await AuthRequest.post("verification/verify", values);
		console.log(res);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		console.log(err?.response?.data?.message);
		toast.error(err?.response?.data?.message);
		throw err;
	}
};

export const userLogout = async (values) => {
	try {
		const res = await AuthRequest.post("user/logout", values);
		console.log(res);
		setAuthToken(res?.data?.key);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		console.log(err?.response?.data?.email[0]);
		throw err;
	}
};
