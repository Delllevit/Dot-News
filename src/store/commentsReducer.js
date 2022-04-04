import {ADD_COMMENT, LOAD_COMMENTS_BY_POST} from './types';

const initialState = {
	comments: [],
};

export const commentsReducer = (state = initialState, action) => {
	switch (action.type) {
	case LOAD_COMMENTS_BY_POST:
		return {
			...state,
			comments: action.comments,
		};
	case ADD_COMMENT:
		return {
			...state,
			comments: action.comments,
		};
	default:
		return state;
	}
};
