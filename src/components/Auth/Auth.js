import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import sawo from "sawo";
import { atLoginAction } from "../../store/Actions/actionAuth";

import "./Auth.css";
const Auth = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		// console.log("callingFor");
		const config = {
			// should be same as the id of the container created on 3rd step
			containerID: "sawo-container",
			// can be one of 'email' or 'phone_number_sms'
			identifierType: "phone_number_sms",
			// Add the API key copied from 2nd step
			apiKey: process.env.REACT_APP_AUTH_SAWO,
			// Add a callback here to handle the payload sent by sdk
			onSuccess: (payload) => {
				dispatch(atLoginAction(payload));
			},
		};
		const Sawo = new sawo(config);
		Sawo.showForm();
	}, [dispatch]);
	return (
		<div
			id='sawo-container'
			style={{
				height: "40%",
				width: "40%",
				minHeight: "300px",
				minWidth: "300px",
				maxHeight: "400px",
				maxWidth: "400px",
			}}
		></div>
	);
};

export default Auth;
