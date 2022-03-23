import React, {useEffect, useRef, useState} from 'react';
import Header from "../components/layout/header/header";
import Posts from "../components/Posts";
import Footer from "../components/layout/footer/footer";
import TitleContainer from "../components/layout/TitleContainer/TitleContainer";
import logo from "../static/images/logo.svg";

const Index = () => {
	const observer = useRef();
	const titleElement = useRef();
	const [paginationFixed, setPaginationFixed] = useState(false);

	useEffect(() => {
		if (observer.current) observer.current.disconnect();

		var cb = function (entries, observer) {
			if (!entries[0].isIntersecting ) {
				setPaginationFixed(true);
			}else{
				setPaginationFixed(false);
			}
		};

		observer.current = new IntersectionObserver(cb);
		observer.current.observe(titleElement.current);
	}, []);

	return (
		<div className="page">
			<Header
				logo={logo}
			/>
			<TitleContainer
				title={'news'}
				previewTextShow={true}
				refElement={titleElement}
			/>
			<Posts
				paginationFix={paginationFixed}
			/>
			<Footer/>
		</div>
	);
};

export default Index;