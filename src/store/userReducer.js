import {USER_CHANGE_PROPS, LOGIN, LOGOUT, AUTH_FORM_SHOW, AUTH_FORM_HIDE, USER_LOAD_PROPS} from './types';

const initialState = {
	login: false,
	authForm: false,
	userInfo: {},
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
	case AUTH_FORM_SHOW:
		return {
			...state,
			authForm: true,
		};

	case AUTH_FORM_HIDE:
		return {
			...state,
			authForm: false,
		};

	case LOGIN:
		localStorage.setItem('auth', 'true');
		return {
			...state,
			login: true,
		};

	case LOGOUT:
		localStorage.removeItem('auth');
		return {
			...state,
			login: false,
		};

	case USER_LOAD_PROPS:

		return {
			...state,
			userInfo: action.userInfo,
		};

	case USER_CHANGE_PROPS:

		return {
			...state,
			userInfo: action.userInfo,
		};

	default:
		return state;
	}
};
