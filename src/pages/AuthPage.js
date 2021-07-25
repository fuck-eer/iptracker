import React from "react";
import Auth from "../components/Auth/Auth";

import classes from "./AuthPage.module.css";
//AUTH PAGE LOADS AT '/auth' URL
const AuthPage = () => {
	return (
		<div className={classes.authPage}>
			<h1 className={classes.head}>IP Address Tracker</h1>
			<Auth />
		</div>
	);
};

export default AuthPage;
