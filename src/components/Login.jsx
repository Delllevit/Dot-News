import React, {useContext} from 'react';
import MainInput from "./UI/MainInput/MainInput";
import MainButton from "./UI/MainButton/MainButton";
import {AuthContext} from "../context";
import UserService from "./API/UserService";

const Login = () => {
	const {setIsAuth} = useContext(AuthContext);

	const login = event => {
		event.preventDefault();
		UserService.login(setIsAuth)
	}

	return (
		<form onSubmit={login}>
			<h2>Авторизація</h2>
			<MainInput type="text" placeholder="Логін"/>
			<MainInput type="password" placeholder="Пароль"/>
			<MainButton>Увійти</MainButton>
		</form>
	);
};

export default Login;