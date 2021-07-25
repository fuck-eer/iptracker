import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/UI/Layout/Layout";
import SpinnerLoader from "./components/UI/Spinner/Spinner";
// import AuthPage from "";
// import HomePage from "";
import { autoLoginAction } from "./store/Actions/actionAuth";
//LAZY LOADING THE COMPONENTS
const AuthPage = React.lazy(() => import("./pages/AuthPage"));
//LAZY LOADING THE COMPONENTS
const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.loaderSlice);
	useEffect(() => {
		//AUTOLOGIN
		dispatch(autoLoginAction());
	}, [dispatch]);
	const token = useSelector((state) => state.authSlice.token);
	//ROUTING INCLUSIVE
	return (
		<div className='App'>
			<Layout>
				{isLoading && <SpinnerLoader />}
				<Suspense fallback={<SpinnerLoader />}>
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
				</Suspense>
			</Layout>
		</div>
	);
}

export default App;
