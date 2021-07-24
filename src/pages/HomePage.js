import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainAbs from "../components/Main/MainAbs";
import Mapy from "../components/UI/Map/Mapy";
import PatternBG from "../components/UI/PatternBG/PatternBG";
import USerControl from "../components/UserControls/USerControl";
import { getMyIpDetails } from "../store/Actions/actionLocation";

const HomePage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMyIpDetails());
	}, [dispatch]);
	return (
		<>
			<PatternBG />
			<MainAbs />
			<Mapy />
			<USerControl />
		</>
	);
};

export default HomePage;
