import axios from "axios";
import { loaderAction } from "../loaderSlice";
import { locationActions } from "../locationSlice";

//ACTION CREATOR : FETCHS THE IP DETAILS
export const getMyIpDetails = (ip = "") => {
	return (dispatch) => {
		//DISPATCHES GLOBAL LOADER SPINNER
		dispatch(loaderAction.setLoading(true));
		//FETCH REQUEST
		axios
			.get(
				`https://geo.ipify.org/api/v1?apiKey=${
					process.env.REACT_APP_IP_SECRET
				}${ip ? "&ipAddress=" + ip : ""}`
			)
			.then((e) => {
				//GLOBAL LOADER FALSE
				dispatch(loaderAction.setLoading(false));

				//DISPATCHES FOR LOCATION SET REDUCER
				dispatch(locationActions.setIp(e.data));
			})
			.catch((err) => {
				//GLOBAL LOADER FALSE
				dispatch(loaderAction.setLoading(false));
				//ERROR HANDLING
				alert(err.message);
			});
	};
};
