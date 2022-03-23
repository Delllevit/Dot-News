import React from 'react';

const ShowMore = ({page, totalPages, active, setActive, refElement}) => {

	if(page === totalPages) {
		return (
			<div className="show_more" ref={refElement}></div>
		);
	}

	return (
		<div className="show_more" ref={refElement}>
			Показати ще
			<span onClick={() => setActive(true)}>+</span>
		</div>
	);
};

export default ShowMore;