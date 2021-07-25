import React from "react";
import { useSelector } from "react-redux";

import classes from "./DataBar.module.css";
import DataBarItem from "./DataBarItem/DataBarItem";
const DataBar = () => {
	const { location, isp, ip } = useSelector((state) => state.locationSlice);
	//data bar container
	return (
		<div className={classes.dataBar}>
			<DataBarItem head={"ip address"} data={ip} />
			<DataBarItem
				head={"location"}
				data={`${location.city}, ${location.country} ${location.postalCode}`}
			/>
			<DataBarItem head={"timezone"} data={`UTC ${location.timeZone} `} />
			<DataBarItem head={"isp"} data={isp} />
		</div>
	);
};

export default React.memo(DataBar);
