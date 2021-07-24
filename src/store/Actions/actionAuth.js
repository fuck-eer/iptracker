import { authAction } from "../authSlice";
let timer;

export const atLoginAction = (userData) => {
	return (dispatch) => {
		const expTimeStamp = new Date().getTime() + 3600000;
		const localPacket = {
			userName: userData.customFieldInputValues.username,
			userId: userData.user_id,
			token: userData.verification_token,
			identifier: userData.identifier,
			expTimeStamp,
		};
		localStorage.setItem("userData", JSON.stringify(localPacket));

		dispatch(authAction.atLogin(localPacket));
		dispatch(autoLogoutAction(expTimeStamp));
	};
};

export const atLogoutAction = () => {
	return (dispatch) => {
		localStorage.removeItem("userData");
		dispatch(authAction.atLogout());
		clearTimeout(timer);
	};
};

export const autoLoginAction = () => {
	return (dispatch) => {
		const fetchedData = JSON.parse(localStorage.getItem("userData"));

		if (!fetchedData) {
			return;
		}

		if (
			!fetchedData.token ||
			new Date().getTime() >= +fetchedData.expTimeStamp
		) {
			dispatch(atLogoutAction());
			return;
		}

		const correctTime = +fetchedData.expTimeStamp;
		const updatedUserData = { ...fetchedData, expTimeStamp: correctTime };

		dispatch(authAction.atLogin(updatedUserData));
		dispatch(autoLogoutAction(correctTime));
	};
};

export const autoLogoutAction = (expTimeStamp) => {
	return (dispatch) => {
		const remTime = expTimeStamp - new Date().getTime();
		timer = setTimeout(() => {
			dispatch(atLogoutAction());
		}, remTime);
	};
};
