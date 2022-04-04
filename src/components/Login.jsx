import React from 'react';
import { useDispatch } from 'react-redux';
import MainInput from './UI/MainInput/MainInput';
import MainButton from './UI/MainButton/MainButton';
import {hideAuthForm, login} from '../store/actions';

function Login() {
	const dispatch = useDispatch();

	const eventSubmit = (event) => {
		event.preventDefault();

		dispatch(login());
		dispatch(hideAuthForm());
	};

	return (
		<form onSubmit={eventSubmit} className="login-form">
			<h2>Вхід</h2>
			<MainInput type="text" placeholder="Логін" />
			<MainInput type="password" placeholder="Пароль" />
			<MainButton type="submit">Увійти</MainButton>
		</form>
	);
}

export default Login;
