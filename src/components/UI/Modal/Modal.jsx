import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hideAuthForm} from '../../../store/actions';

function Modal({ children }) {
	const dispatch = useDispatch();
	const modalActive = useSelector((state) => {
		const { userReducer } = state;
		return userReducer.authForm;
	});

	return (
		<div className={modalActive ? 'modal active' : 'modal'} onClick={() => dispatch(hideAuthForm())}>
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				<button type="button" className="modal__close" onClick={() => dispatch(hideAuthForm())}>&#215;</button>
				{children}
			</div>
		</div>
	);
}

export default Modal;
