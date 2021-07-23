import React from "react";
import classes from "./DataBarItem.module.css";
const DataBarItem = (props) => {
	return (
		<div className={classes.dataBarItem}>
			<p className={classes.head}>{props.head}</p>
			<p className={classes.data}>{props.data}</p>
		</div>
	);
};

export default DataBarItem;
