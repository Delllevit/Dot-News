import React from 'react';
import cl from './MainButton.module.scss';

const MainButton = ({children, ...props}) => {
	return (
		<button {...props} className={cl.button}>
			{children}
		</button>
	);
};

export default MainButton;