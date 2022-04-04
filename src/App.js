import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './static/styles/App.scss';
import { useDispatch } from 'react-redux';
import Index from './pages';
import PageNotFound from './pages/pageNotFound';
import PostDetail from './pages/postDetail';
import Login from './components/Login';
import Modal from './components/UI/Modal/Modal';
import Personal from './pages/personal';
import About from './pages/about';
import Contacts from './pages/contacts';
import { login, userLoadProps } from './store/actions';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			dispatch(login());
			dispatch(userLoadProps());
		}
	}, []);

	return (

		<Router>
			<Routes>
				<Route path="*" element={<PageNotFound />} />
				<Route
					path="/404/"
					element={<PageNotFound />}
				/>
				<Route
					path="/"
					element={<Index />}
				/>
				<Route
					path="/post/:url/"
					element={<PostDetail />}
				/>
				<Route
					path="/about/"
					element={<About />}
				/>
				<Route
					path="/contacts/"
					element={<Contacts />}
				/>
				<Route
					path="/personal/"
					element={<Personal />}
				/>
			</Routes>

			<Modal>
				<Login />
			</Modal>
		</Router>
	);
}

export default App;
