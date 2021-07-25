import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import LikeButton from "./LikeButton/LikeButton";
import MinButton from "./minButtons/MinButton";
import SuggestionList from "./SuggestionList/SuggestionList";
import classes from "./UserControll.module.css";
const USerControl = () => {
	//state declarations
	const [ipList, setipList] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	const [showList, setshowList] = useState(false);
	const { identifier } = useSelector((state) => state.authSlice);
	const { location, ip } = useSelector((state) => state.locationSlice);
	const [isPresent, setisPresent] = useState(false);

	//checks if ip is already saved
	const checkIfPresent = useCallback(() => {
		if (!ip) {
			return;
		}

		setisLoading(true);
		axios
			.get("https://ipaddresstracker-backend.herokuapp.com/ipdata/find/" + ip, {
				headers: {
					Authorization: "Bearer " + identifier,
				},
			})
			.then((e) => {
				setisLoading(false);
				if (e.data.msg === 0) {
					//not present in list
					setisPresent(false);
				} else if (e.data.msg === 1) {
					//already present in list
					setisPresent(true);
				}
			})
			.catch((err) => {
				setisLoading(false);
				if (err.response.data.msg === "userNotFound") {
					return;
				} else {
					alert(err.message);
				}
			});
	}, [identifier, ip]);
	//kicks on every ip change checks if it already exists
	useEffect(() => {
		checkIfPresent();
	}, [checkIfPresent]);

	//on Ip save
	const postIpList = () => {
		setisLoading(true);

		axios
			.post(
				"https://ipaddresstracker-backend.herokuapp.com/ipdata",
				{ ip, city: location.city },
				{
					headers: {
						Authorization: "Bearer " + identifier,
					},
				}
			)
			.then((e) => {
				setisLoading(false);
				setisPresent(true);
				//update state
				getIpList();
			})
			.catch((err) => {
				setisLoading(false);
				alert(err.message);
			});
	};

	//when fetchin ip
	const getIpList = useCallback(() => {
		setisLoading(true);
		axios
			.get("https://ipaddresstracker-backend.herokuapp.com/ipdata", {
				headers: { Authorization: "Bearer " + identifier },
			})
			.then((e) => {
				// console.log(e.data);
				setipList(e.data.storedIps);
				setisLoading(false);
			})
			.catch((err) => {
				setisLoading(false);
				if (err.response.data.msg === "not saved history found") {
					return;
				} else {
					alert(err.message);
				}
			});
	}, [identifier]);

	//fetch ip n initial load
	useEffect(() => {
		getIpList();
		return () => {};
	}, [getIpList]);
	//on ip post
	const onPostListToServer = () => {
		//if present already
		if (isPresent) {
			return alert("already saved!");
		}
		//if not present
		postIpList();
	};

	//toggle lsit view
	const toggleList = () => {
		setshowList((prev) => !prev);
	};

	//memoize list to save some re-evaluations
	const llist = useMemo(() => ipList, [ipList]);
	return (
		<div className={classes.USerControl}>
			{/* {isLoading && <Spinner2 />} */}

			<LikeButton
				label={isPresent ? "Saved" : "Save it!"}
				isPresent={isPresent}
				onPost={onPostListToServer}
			/>
			<MinButton
				label={showList ? "Hide List" : "Show List"}
				onButtClick={toggleList}
			/>
			{showList && <SuggestionList isLoading={isLoading} ips={llist} />}
		</div>
	);
};

export default React.memo(USerControl);
