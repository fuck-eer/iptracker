import axios from "axios";
import { locationActions } from "../locationSlice";

export const getMyIpDetails = (ip = "") => {
	return (dispatch) => {
		// const ipadd = ip ? ip : "";
		axios
			.get(
				`https://geo.ipify.org/api/v1?apiKey=${
					process.env.REACT_APP_IP_SECRET
				}${ip ? "&ipAddress=" + ip : ""}`
			)
			.then((e) => {
				console.log(e.data);
				dispatch(locationActions.setIp(e.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
