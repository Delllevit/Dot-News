import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { postReducer } from './postReducer';
import { commentsReducer } from './commentsReducer';

export const rootReducer = combineReducers({
	userReducer,
	postReducer,
	commentsReducer,
});
