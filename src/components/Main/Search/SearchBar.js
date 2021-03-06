import React from "react";
import classes from "./SearchBar.module.css";
import iconArrow from "../../../assets/icon-arrow.svg";
import { useDispatch } from "react-redux";
import { getMyIpDetails } from "../../../store/Actions/actionLocation";
import useValidation from "../../../hooks/use-Validation";
//renders searchbar
const SearchBar = () => {
	//ipv4 validation function
	const valFunc = (str) => {
		if (str.length > 0) {
			const iparr = str.split(".");
			if (iparr.length === 4) {
				const indx = iparr.findIndex(
					(e) => isNaN(e) || e.length === 0 || +e < 0 || +e > 255
				);
				if (indx === -1) {
					return true;
				}
				return false;
			}
			return false;
		}
		return false;
	};
	const dispatch = useDispatch();
	//custom hook for input validation
	const {
		enteredValue: ipAdd,
		isValid,
		onEVChangeHandler,
		onBlurHandler,
		reset,
		hasError,
	} = useValidation(valFunc);

	//onform submit
	const onSub = (event) => {
		event.preventDefault();
		if (isValid) {
			dispatch(getMyIpDetails(ipAdd));
			reset();
		}
	};

	//invalid classes
	const Inputclassname = hasError
		? `${classes.mainInput} ${classes.invalid}`
		: `${classes.mainInput}`;
	const Buttonclassname = hasError
		? `${classes.mainButton} ${classes.invalButt}`
		: `${classes.mainButton}`;
	// console.log(hasError);

	return (
		<>
			<form onSubmit={onSub} className={classes.search}>
				<input
					onChange={onEVChangeHandler}
					type='text'
					onBlur={onBlurHandler}
					value={ipAdd}
					placeholder='Search for any IP address or domain'
					className={Inputclassname}
				/>
				<button className={Buttonclassname}>
					<img className={classes.iconarrow} src={iconArrow} alt='GO' />
				</button>
			</form>
		</>
	);
};

export default SearchBar;
