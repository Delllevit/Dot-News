import React, {useContext, useEffect} from 'react';
import MainButton from "./UI/MainButton/MainButton";
import {AuthContext} from "../context";
import UserService from "./API/UserService";
import {getTimeString} from "../utils/timeViewer";

const Comments = ({elements, addCommentValue, setAddCommentValue, addComment}) => {
	const {isAuth, setModalActive} = useContext(AuthContext);
	let user = UserService.getUserInfo();

	return (
		<div className="comments-block">

			{isAuth
				?
				<div className="add-comment">
					<div className="user-image">{user.name.substr(0, 1).toUpperCase()}</div>
					<div className="add-form">
						<form onSubmit={addComment}>
							<textarea onChange={e => setAddCommentValue(e.target.value)} value={addCommentValue}/>
							<button>Отправить</button>
						</form>
					</div>
				</div>
				:
				<div className="auth-block">
					<MainButton onClick={() => setModalActive(true)}>Увійти</MainButton>
				</div>

			}

			<div className="comments">

				{elements
					?
					<div>
						{elements.map((comment, index) =>
							<div key={index} className="comment">
								<div className="user-image">{comment.user.name.substr(0, 1).toUpperCase()}</div>
								<div className="comment-info">
									<div className="user-name">{comment.user.name} {comment.user.lastName}</div>
									<div className="time">{getTimeString(comment.time)}</div>
									<div className="text">
										{comment.text}
									</div>
								</div>
							</div>
						)}
					</div>
					:
					<div>Нет комментариев</div>

				}

			</div>
		</div>
	);
};

export default Comments;