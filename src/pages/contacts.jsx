import React from 'react';
import Header from '../components/layout/header/header';
import logo from '../static/images/logo.svg';
import TitleContainer from '../components/layout/TitleContainer/TitleContainer';
import Footer from '../components/layout/footer/footer';

function Contacts() {
	return (
		<div className="page inner">
			<Header
				logo={logo}
			/>
			<TitleContainer
				title="contact"
			/>
			<Footer
				noSocial
			/>
		</div>
	);
}

export default Contacts;
