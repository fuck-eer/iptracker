import React from "react";
import classes from "./SearchBar.module.css";
import iconArrow from "../../../assets/icon-arrow.svg";
const SearchBar = () => {
	return (
		<div className={classes.search}>
			<input
				type='text'
				placeholder='Search for any IP address or domain'
				className={classes.mainInput}
			/>
			<button className={classes.mainButton}>
				<img className={classes.iconarrow} src={iconArrow} alt='GO' />
			</button>
		</div>
	);
};

export default SearchBar;
