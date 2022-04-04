import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../components/layout/header/header';
import logo from '../static/images/logo.svg';
import TitleContainer from '../components/layout/TitleContainer/TitleContainer';
import Footer from '../components/layout/footer/footer';
import MainInput from '../components/UI/MainInput/MainInput';
import MainButton from '../components/UI/MainButton/MainButton';

import {userChangeProps} from '../store/actions';

const Personal = () => {
	const dispatch = useDispatch();

	const [userName, setUserName] = useState('');
	const [userLastName, setUserLastName] = useState('');
	const [userEmail, setUserEmail] = useState('');

	const user = useSelector((state) => {
		const { userReducer } = state;
		return userReducer.userInfo;
	});

	useEffect(() => {
		if (user.name) {
			setUserName(user.name);
			setUserLastName(user.lastName);
			setUserEmail(user.email);
		}
	}, [user]);

	const eventSubmit = (e) => {
		e.preventDefault();

		dispatch(userChangeProps({
			name: userName,
			lastName: userLastName,
			email: userEmail,
		}));
	};

	return (
		<div className="page inner">
			<Header
				logo={logo}
			/>
			<TitleContainer
				title="user"
			/>
			<div className="post-container">
				<form onSubmit={eventSubmit}>
					<MainInput type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
					<MainInput type="text" value={userLastName} onChange={(e) => setUserLastName(e.target.value)} />
					<MainInput type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
					<MainButton>Змінити</MainButton>
				</form>
			</div>
			<Footer
				noSocial
			/>
		</div>
	);
};

export default Personal;
