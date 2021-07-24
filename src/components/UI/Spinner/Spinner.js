import React from "react";
import ReactDom from "react-dom";
import "./Spinner.css";
const Spinner = () => {
	return (
		<div className='lds-grid'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

const SpinnerLoader = () => {
	return (
		<>
			{ReactDom.createPortal(<Spinner />, document.getElementById("spinner"))}
		</>
	);
};

export default SpinnerLoader;
