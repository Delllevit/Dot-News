import React, {useContext, useState} from 'react';
import Header from "../components/layout/header/header";
import logo from "../static/images/logo.svg";
import TitleContainer from "../components/layout/TitleContainer/TitleContainer";
import Footer from "../components/layout/footer/footer";
import {AuthContext} from "../context";
import { useNavigate } from "react-router-dom";
import MainInput from "../components/UI/MainInput/MainInput";
import MainButton from "../components/UI/MainButton/MainButton";
import UserService from "../components/API/UserService";

const Personal = () => {
	const navigate = useNavigate();
	const {isAuth} = useContext(AuthContext);

	if (!isAuth){
		navigate("/");
	}

	let user = UserService.getUserInfo();

	const [userValues, setUserValues] = useState({
		name: user.name,
		lastName: user.lastName,
		email: user.email,
	});

	const changeInfo = (e) => {
		e.preventDefault();

		UserService.changeInfo(userValues.name, userValues.lastName, userValues.email);
	}



	return (
		<div className="page">
			<Header
				logo={logo}
			/>
			<TitleContainer
				title={'user'}
			/>
			<div className="post-container">
				<form onSubmit={changeInfo}>
					<MainInput type="text" value={userValues.name} onChange={e => setUserValues({...userValues, name: e.target.value})}/>
					<MainInput type="text" value={userValues.lastName} onChange={e => setUserValues({...userValues, lastName: e.target.value})}/>
					<MainInput type="email" value={userValues.email} onChange={e => setUserValues({...userValues, email: e.target.value})}/>
					<MainButton>Змінити</MainButton>
				</form>
			</div>
			<Footer
				noSocial={true}
			/>
		</div>
	);
};

export default Personal;