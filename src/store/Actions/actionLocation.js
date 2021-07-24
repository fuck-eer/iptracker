import axios from "axios";
import { loaderAction } from "../loaderSlice";
import { locationActions } from "../locationSlice";

export const getMyIpDetails = (ip = "") => {
	return (dispatch) => {
		// const ipadd = ip ? ip : "";
		dispatch(loaderAction.setLoading(true));
		axios
			.get(
				`https://geo.ipify.org/api/v1?apiKey=${
					process.env.REACT_APP_IP_SECRET
				}${ip ? "&ipAddress=" + ip : ""}`
			)
			.then((e) => {
				dispatch(loaderAction.setLoading(false));

				console.log(e.data);
				dispatch(locationActions.setIp(e.data));
			})
			.catch((err) => {
				dispatch(loaderAction.setLoading(false));
				alert(err.message);
			});
	};
};
