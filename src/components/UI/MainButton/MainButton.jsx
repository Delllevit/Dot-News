import React from 'react';

const MainButton = ({ children, ...props }) => {
	return (
		<button {...props} className="button">
			{children}
		</button>
	);
};

export default MainButton;
