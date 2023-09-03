import { request } from "../utils/axios";
import { setAuthToken } from "../config/helpers";
import { toast } from "react-toastify";

export const fetchUserData = async () => {
	try {
		const res = await request.get("user");
		console.log(res);
		return res;
	} catch (err) {
		console.log(err?.response?.data);
		console.log(err?.response?.data?.message);
		throw err;
	}
};
