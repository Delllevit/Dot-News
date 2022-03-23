import React from 'react';
import Header from "../components/layout/header/header";
import logo from "../static/images/logo.svg";
import TitleContainer from "../components/layout/TitleContainer/TitleContainer";
import Footer from "../components/layout/footer/footer";

const Contacts = () => {
	return (
		<div className="page">
			<Header
				logo={logo}
			/>
			<TitleContainer
				title={'contact'}
			/>
			<Footer
				noSocial={true}
			/>
		</div>
	);
};

export default Contacts;