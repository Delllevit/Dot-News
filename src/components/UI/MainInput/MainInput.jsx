import React from 'react';
import cl from './MainInput.module.scss';

const MainInput = (props) => {
	return (
		<input className={cl.input} {...props}/>
	);
};

export default MainInput;