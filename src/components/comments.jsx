import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainButton from './UI/MainButton/MainButton';

import { getTimeString } from '../utils/timeViewer';
import {loadCommentsByPost, showAuthForm, addComment} from '../store/actions';

const Comments = ({ postId }) => {
	const dispatch = useDispatch();
	const [comments, setComments] = useState([]);
	const [commentValue, setCommentValue] = useState('');

	useEffect(() => {
		dispatch(loadCommentsByPost(postId));
	}, []);

	const commentsAr = useSelector((state) => {
		const { commentsReducer } = state;
		return commentsReducer.comments;
	});

	useEffect(() => {
		setComments(commentsAr);
	}, [commentsAr]);

	const isAuth = useSelector((state) => {
		const { userReducer } = state;
		return userReducer.login;
	});

	const userInfo = useSelector((state) => {
		const { userReducer } = state;
		return userReducer.userInfo;
	});

	const handlerForm = (e) => {
		e.preventDefault();

		dispatch(addComment(commentValue, postId));
		setCommentValue('');
	};

	return (
		<div className="comments-block">

			{isAuth
				? (
					<div className="add-comment">
						<div className="user-image">{userInfo.name.substr(0, 1).toUpperCase()}</div>
						<div className="add-form">
							<form onSubmit={handlerForm}>
								<textarea onChange={(e) => setCommentValue(e.target.value)} value={commentValue} />
								<button type="submit">Отправить</button>
							</form>
						</div>
					</div>
				)
				: (
					<div className="auth-block">
						<MainButton onClick={() => dispatch(showAuthForm())}>Увійти</MainButton>
					</div>
				)}

			<div className="comments">

				{comments
					? (
						<div>
							{comments.map((comment) => (
								<div key={comment.text} className="comment">
									<div className="user-image">{/* userInfo.name.substr(0, 1).toUpperCase() */}</div>
									<div className="comment-info">
										<div className="user-name">
											{/* userInfo.name */}
											{' '}
											{/* userInfo.lastName */}
										</div>
										<div className="time">{getTimeString(comment.time)}</div>
										<div className="text">
											{comment.text}
										</div>
									</div>
								</div>
							))}
						</div>
					)
					: <div>Нет комментариев</div>}

			</div>
		</div>
	);
};

export default Comments;
