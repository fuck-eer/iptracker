import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import LikeButton from "./LikeButton/LikeButton";
import MinButton from "./minButtons/MinButton";
import SuggestionList from "./SuggestionList/SuggestionList";
import classes from "./UserControll.module.css";
const USerControl = () => {
	const [ipList, setipList] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	const [showList, setshowList] = useState(false);
	const { identifier } = useSelector((state) => state.authSlice);
	const { location, ip } = useSelector((state) => state.locationSlice);
	const [isPresent, setisPresent] = useState(false);

	const checkIfPresent = useCallback(() => {
		if (!ip) {
			return;
		}

		https: setisLoading(true);
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

	useEffect(() => {
		checkIfPresent();
	}, [checkIfPresent]);

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

	const getIpList = useCallback(() => {
		setisLoading(true);
		axios
			.get("https://ipaddresstracker-backend.herokuapp.com/ipdata", {
				headers: { Authorization: "Bearer " + identifier },
			})
			.then((e) => {
				console.log(e.data);
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

	useEffect(() => {
		getIpList();
		return () => {};
	}, [getIpList]);

	const onPostListToServer = () => {
		if (isPresent) {
			return alert("already saved!");
		}

		postIpList();
	};

	const toggleList = () => {
		setshowList((prev) => !prev);
	};

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
			{showList && <SuggestionList ips={llist} />}
		</div>
	);
};

export default React.memo(USerControl);
