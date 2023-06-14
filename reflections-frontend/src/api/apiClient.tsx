import axios from "axios";
import jwtDecode from "jwt-decode";
import { regenerateToken } from "../utility/utility";

const publicApiClient = axios.create({
	baseURL: "",
	withCredentials: true,
});

const privateApiClient = axios.create({
	baseURL: "",
	withCredentials: true,
});

privateApiClient.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem("accessToken");
	const currDate = new Date();
	let decodedToken: { exp: number }, expTime;

	if (accessToken) {
		decodedToken = jwtDecode(accessToken);
		expTime = decodedToken.exp;
	}

	if ((expTime && expTime * 1000 < currDate.getTime()) || !accessToken) {
		const promise = regenerateToken();
		promise
			.then((res) => {
				if (res.data.accessToken) {
					localStorage.setItem("accessToken", res.data.accessToken);
					config.headers[
						"Authorization"
					] = `Bearer ${res.data.accessToken}`;
				}
			})
			.catch(() => {
				window.location.href = "/login";
			});
	} else {
		config.headers["Authorization"] = `Bearer ${accessToken}`;
	}

	return config;
});

export { publicApiClient, privateApiClient };
