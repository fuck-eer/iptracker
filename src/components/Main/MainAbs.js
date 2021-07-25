import React from "react";
import Logout from "../UserControls/LogoutButton/Logout";
import DataBar from "./Databar/DataBar";
import Heading from "./Heading/Heading";
import classes from "./MainAbs.module.css";
import SearchBar from "./Search/SearchBar";
const MainAbs = () => {
	//renders the main tab
	return (
		<div className={classes.MainAbs}>
			<Heading />
			<SearchBar />
			<DataBar />
			<Logout />
		</div>
	);
};

export default React.memo(MainAbs);
