import React from "react";
import DataBar from "./Databar/DataBar";
import Heading from "./Heading/Heading";
import classes from "./MainAbs.module.css";
import SearchBar from "./Search/SearchBar";
const MainAbs = () => {
	return (
		<div className={classes.MainAbs}>
			<Heading />
			<SearchBar />
			<DataBar />
		</div>
	);
};

export default React.memo(MainAbs);
