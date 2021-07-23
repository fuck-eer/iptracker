import React from "react";
import classes from "./DataBar.module.css";
import DataBarItem from "./DataBarItem/DataBarItem";
const DataBar = () => {
	return (
		<div className={classes.dataBar}>
			<DataBarItem head={"ip address"} data={"192.212.172.441"} />
			<DataBarItem head={"location"} data={"Brooklyn, NY 100001"} />
			<DataBarItem head={"timezone"} data={"UTC - 5:00"} />
			<DataBarItem head={"isp"} data={"Starlink datacomp"} />
		</div>
	);
};

export default DataBar;
