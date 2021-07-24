import React from "react";
import notSavedicon from "../../../assets/notsaved.png";
import Savedicon from "../../../assets/saved.png";
import classes from "./LikeButton.module.css";
const LikeButton = (props) => {
	return (
		<button
			label={props.label}
			className={classes.likeclass}
			onClick={props.onPost}
		>
			<img src={props.isPresent ? Savedicon : notSavedicon} alt='save' />
		</button>
	);
};

export default LikeButton;
