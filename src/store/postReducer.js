import {LOAD_POST_DETAIL, LOAD_POSTS} from './types';

const initialState = {
	posts: {},
	detailPost: {},
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
	case LOAD_POSTS:

		return {
			...state,
			posts: action.posts,
		};

	case LOAD_POST_DETAIL:

		return {
			...state,
			post: action.post,
		};

	default:
		return state;
	}
};
