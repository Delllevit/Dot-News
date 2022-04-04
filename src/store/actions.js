import {
	ADD_COMMENT,
	AUTH_FORM_HIDE,
	AUTH_FORM_SHOW, LOAD_COMMENTS_BY_POST,
	LOAD_POST_DETAIL,
	LOAD_POSTS,
	LOGIN,
	LOGOUT,
	USER_CHANGE_PROPS,
	USER_LOAD_PROPS,
} from './types';
import postsAr from '../components/API/posts';
import commentsAr from '../components/API/comments';

export function showAuthForm() {
	return {
		type: AUTH_FORM_SHOW,
	};
}

export function hideAuthForm() {
	return {
		type: AUTH_FORM_HIDE,
	};
}

export function login() {
	return {
		type: LOGIN,
	};
}

export function logout() {
	return {
		type: LOGOUT,
	};
}

export function userLoadProps() {
	let user = {
		id: 1,
		name: 'Ім\'я',
		lastName: 'Прізвище',
		email: 'test@gmail.com',
	};

	if (!localStorage.getItem('user')) {
		localStorage.setItem('user', JSON.stringify(user));
	} else {
		user = JSON.parse(localStorage.getItem('user'));
	}

	return {
		type: USER_LOAD_PROPS,
		userInfo: user,
	};
}

export function userChangeProps(data) {
	const userChangeInfo = {
		name: data.name,
		lastName: data.lastName,
		email: data.email,
	};

	localStorage.setItem('user', JSON.stringify(userChangeInfo));

	return {
		type: USER_CHANGE_PROPS,
		userInfo: userChangeInfo,
	};
}

export function loadPosts() {
	const posts = postsAr;

	return {
		type: LOAD_POSTS,
		posts,
	};
}

export function loadPostsDetail(code) {
	const posts = postsAr;
	const post = posts.find((post) => post.url === code);

	return {
		type: LOAD_POST_DETAIL,
		post,
	};
}

export function loadCommentsByPost(code) {
	let comments = commentsAr;
	const commentsPost = [];

	if (!localStorage.getItem('comments')) {
		localStorage.setItem('comments', JSON.stringify(comments));
	} else {
		comments = JSON.parse(localStorage.getItem('comments'));
	}

	comments.forEach((comment) => {
		if (comment.postCode === code) {
			commentsPost.push(comment);
		}
	});

	return {
		type: LOAD_COMMENTS_BY_POST,
		comments: commentsPost,
	};
}

export function addComment(text, postId) {
	let comments = commentsAr;

	if (!localStorage.getItem('comments')) {
		localStorage.setItem('comments', JSON.stringify(comments));
	} else {
		comments = JSON.parse(localStorage.getItem('comments'));
	}

	const comment = {
		postCode: postId,
		time: Date.now(),
		text,
	};

	comments.unshift(comment);
	localStorage.setItem('comments', JSON.stringify(comments));

	return {
		type: ADD_COMMENT,
		comments,
	};
}
