import React from "react";
import classes from "./MinButton.module.css";
import icon from "../../../assets/listicon.png";
import cross from "../../../assets/cross.png";
const MinButton = (props) => {
	return (
		<button
			label={props.label}
			onClick={props.onButtClick}
			className={classes.minButton}
		>
			<img src={props.label.includes("Hide") ? cross : icon} alt='list' />
		</button>
	);
};

export default MinButton;
