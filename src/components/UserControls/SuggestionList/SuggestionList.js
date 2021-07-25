import React from "react";
import Spinner2 from "../../UI/Spinner/Spinner2";

import classes from "./SuggestionList.module.css";
const SuggestionList = (props) => {
	let list = <p>no ips found</p>;

	if (props.ips && props.ips.length > 0) {
		list = props.ips.map((e) => {
			return (
				<div key={e.ipadd} className={classes.items}>
					<p className={classes.ip}>{e.ipadd}</p>
					<p className={classes.tag}>{e.tag}</p>
				</div>
			);
		});
	}

	return (
		<div className={classes.suggestionlist}>
			<h6 className={classes.head}>Saved IPs</h6>
			<div className={classes.holder}>
				{props.isLoading ? <Spinner2 /> : list}
			</div>
		</div>
	);
};

export default React.memo(SuggestionList);
