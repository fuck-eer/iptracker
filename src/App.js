import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/UI/Layout/Layout";
import SpinnerLoader from "./components/UI/Spinner/Spinner";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { autoLoginAction } from "./store/Actions/actionAuth";

function App() {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.loaderSlice);
	useEffect(() => {
		dispatch(autoLoginAction());
		// dispatch(getMyIpDetails());
	}, [dispatch]);
	const token = useSelector((state) => state.authSlice.token);
	return (
		<div className='App'>
			<Layout>
				{isLoading && <SpinnerLoader />}
				<Switch>
					<Route path='/homepage'>
						{token && <HomePage />}
						{!token && <Redirect to='/auth' />}
					</Route>
					<Route path='/auth'>
						{token && <Redirect to='/homepage' />}
						{!token && <AuthPage />}
					</Route>
					<Route path='/' exact>
						{token && <Redirect to='/homepage' />}
						{!token && <Redirect to='/auth' />}
					</Route>
					<Route path='*'>
						<Redirect to='/' />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
