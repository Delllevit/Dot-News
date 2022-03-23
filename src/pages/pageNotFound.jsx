import React from 'react';
import Header from "../components/layout/header/header";
import logo from "../static/images/logo.svg";
import TitleContainer from "../components/layout/TitleContainer/TitleContainer";
import Footer from "../components/layout/footer/footer";

const PageNotFound = () => {
	return (
		<div className="page">
			<Header
				logo={logo}
			/>
			<TitleContainer
				title={'404'}
			/>
			<Footer
				noSocial={true}
			/>
		</div>
	);
};

export default PageNotFound;