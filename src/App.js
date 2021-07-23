import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import MainAbs from "./components/Main/MainAbs";
import Layout from "./components/UI/Layout/Layout";
import Mapy from "./components/UI/Map/Mapy";
import PatternBG from "./components/UI/PatternBG/PatternBG";
import { getMyIpDetails } from "./store/Actions/actionLocation";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMyIpDetails());
	}, [dispatch]);
	return (
		<div className='App'>
			<Layout>
				<PatternBG />
				<MainAbs />
				<Mapy />
			</Layout>
		</div>
	);
}

export default App;
