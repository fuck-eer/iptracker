import "./App.css";
import MainAbs from "./components/Main/MainAbs";
import Layout from "./components/UI/Layout/Layout";
import PatternBG from "./components/UI/PatternBG/PatternBG";

function App() {
	return (
		<div className='App'>
			<Layout>
				<PatternBG />
				<MainAbs />
			</Layout>
		</div>
	);
}

export default App;
