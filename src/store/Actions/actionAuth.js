import { authAction } from "../authSlice";
let timer;

//THESE ARE THE ACTION CREATORS FOR AUTHSLICE OF THE STORE

//LOGIN ACTION CREATOR: STORE THE TOKEN IN LOCAL STORAGE
export const atLoginAction = (userData) => {
	return (dispatch) => {
		//GET TOKEN EXPIRE TIMESTAMP
		const expTimeStamp = new Date().getTime() + 3600000;
		//TRANSFORM DATA
		const localPacket = {
			userName: userData.customFieldInputValues.username,
			userId: userData.user_id,
			token: userData.verification_token,
			identifier: userData.identifier,
			expTimeStamp,
		};

		//STORE DATA
		localStorage.setItem("userData", JSON.stringify(localPacket));

		//DISPATCH LOGIN
		dispatch(authAction.atLogin(localPacket));
		//DISPATCH AUTOLOGOUT
		dispatch(autoLogoutAction(expTimeStamp));
	};
};

//LOGOUT ACTION CREATOR: RELEASE THE TOKEN FROM LOCAL STORAGE
export const atLogoutAction = () => {
	return (dispatch) => {
		//REMOVE FROM BROWSER STORAGE
		localStorage.removeItem("userData");
		//DISPATCH ATLOGOUT
		dispatch(authAction.atLogout());
		//CLEAR AUTO LOGOUT TIMER
		clearTimeout(timer);
	};
};

//AUTOLOGIN ACTION CREATOR: STORE THE TOKEN IN LOCAL STORAGE AFTER FETCHING FROM STORAGE
export const autoLoginAction = () => {
	return (dispatch) => {
		//FETCH TOKEN FROM STORAGE AND PARSE
		const fetchedData = JSON.parse(localStorage.getItem("userData"));

		//IF TOKEN NOT FOUND
		if (!fetchedData) {
			return;
		}

		//IF TOKEN EXPIRED OR INVALID
		if (
			!fetchedData.token ||
			new Date().getTime() >= +fetchedData.expTimeStamp
		) {
			dispatch(atLogoutAction());
			return;
		}
		//DISPATCH LOGIN
		const correctTime = +fetchedData.expTimeStamp;
		const updatedUserData = { ...fetchedData, expTimeStamp: correctTime };

		dispatch(authAction.atLogin(updatedUserData));
		//DISPATCHING AUTOLOGOUT
		dispatch(autoLogoutAction(correctTime));
	};
};

//AUTOLOGOUT ACTION CREATOR: KICKS IN A TIMER THAT LOGS USER OUT AFTER THE TOKEN EXPIRES
export const autoLogoutAction = (expTimeStamp) => {
	return (dispatch) => {
		const remTime = expTimeStamp - new Date().getTime();
		timer = setTimeout(() => {
			//DISPATCH LOGOUT
			dispatch(atLogoutAction());
		}, remTime);
	};
};
