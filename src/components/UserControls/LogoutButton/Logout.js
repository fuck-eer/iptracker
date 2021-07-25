import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { atLogoutAction } from "../../../store/Actions/actionAuth";
import classes from "./Logout.module.css";
import redicon from "../../../assets/logout-red.png";
import whiteicon from "../../../assets/logout-white.png";
const Logout = () => {
	const dispatch = useDispatch();
	const [hover, sethover] = useState(false);
	return (
		<button
			onMouseEnter={() => {
				sethover(true);
			}}
			onMouseLeave={() => {
				sethover(false);
			}}
			className={classes.logout}
			onClick={() => {
				dispatch(atLogoutAction());
			}}
		>
			{hover && <p>Logout</p>}
			<img src={!hover ? redicon : whiteicon} alt='logout' />
		</button>
	);
};

export default Logout;
