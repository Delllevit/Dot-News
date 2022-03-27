import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer/footer";
import dribble from "../static/images/dribble-white.svg";
import facebook from "../static/images/facebook-white.svg";
import instagram from "../static/images/instagram-white.svg";
import twitter from "../static/images/twitter-white.svg";

import logo from "../static/images/logo-white.svg";
import postDetail from "../static/images/post-detail.png";
import authorImage from "../static/images/user.png";
import PostService from "../components/API/PostService";
import Comments from "../components/comments";

const PostDetail = () => {
	const navigate = useNavigate();
	const params = useParams();
	const element = PostService.getByCode(params.url);
	const [comments, setComments] = useState(PostService.getCommentByPostId(params.url));
	const [commentValue, setCommentValue] = useState('');

	if (!element){
		navigate("/404/");
	}

	const addComment = (e) => {
		e.preventDefault();

		let newComments = PostService.addComment(commentValue, params.url);

		setComments(newComments);
		setCommentValue('');
	}

	if(!element){
		return (
			<></>
		);
	}

	return (
		<div className="page black">
			<Header
				logo={logo}
			/>
			<div className="title__container">
				<div className="social">
					<ul className="list">
						<li>
							<a href="https://dribbble.com/" target="blank">
								<img src={dribble} alt="dribbble"/>
							</a>
						</li>
						<li>
							<a href="https://facebook.com/" target="blank">
								<img src={facebook} alt="facebook"/>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/" target="blank">
								<img src={instagram} alt="instagram"/>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/" target="blank">
								<img src={twitter} alt="twitter"/>
							</a>
						</li>
					</ul>
					<div className="title">
						<span> </span>
						Ми в соц-мережах
					</div>
				</div>
				<h1 className="post">{element.title}</h1>
				<div className="post-image">
					<img src={postDetail} alt=""/>
				</div>
				<div className="post-info">
					<div className="info-items">
						<div className="info-item">
							<div className="item-title">Категорія</div>
							<div className="item-text">{element.category}</div>
						</div>
						<div className="info-item">
							<div className="item-title">Час читання</div>
							<div className="item-text">5 хв</div>
						</div>
					</div>
					<div className="user-info">
						<div className="user-image">
							<img src={authorImage} alt=""/>
						</div>
						<div className="user-name">
							Игорь Тищенко
						</div>
					</div>
				</div>
			</div>
			<div className="text-container">
				<div className="progress"> </div>
				<h2>Curabitur rhoncus sem maximus elit finibus</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tortor efficitur, sagittis nisi et, pharetra felis. Sed iaculis blandit luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque bibendum, nunc id sollicitudin interdum, diam magna placerat ipsum, nec mollis dui libero eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at purus ornare, ultrices erat vitae, faucibus libero. Maecenas pretium lorem nec neque euismod, eu molestie lacus vulputate. Donec non pharetra diam. Mauris eget iaculis urna. Donec mollis ultricies cursus. Vivamus eu vulputate leo. Morbi vulputate ante sit amet lorem aliquet ultrices. Etiam sed aliquam lectus, in bibendum massa.
					<br/>
					<br/>
					Mauris feugiat leo ac nisl eleifend euismod ut in est. Sed sed luctus tortor. Curabitur condimentum, ex vitae tristique lacinia, nunc ex commodo ex, id imperdiet nulla lectus vitae massa. Cras vulputate non est in volutpat. Proin consequat, felis nec lobortis laoreet, elit orci rutrum metus, vel consequat diam risus id ipsum. Fusce ultricies nisl non aliquet pulvinar. Integer augue nisl, viverra dictum efficitur sed, tempor ac magna. Aliquam posuere ante turpis, sed maximus nunc ultricies nec.
				</p>
				<h2>Curabitur rhoncus sem maximus elit finibus</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tortor efficitur, sagittis nisi et, pharetra felis. Sed iaculis blandit luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque bibendum, nunc id sollicitudin interdum, diam magna placerat ipsum, nec mollis dui libero eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at purus ornare, ultrices erat vitae, faucibus libero. Maecenas pretium lorem nec neque euismod, eu molestie lacus vulputate. Donec non pharetra diam. Mauris eget iaculis urna. Donec mollis ultricies cursus. Vivamus eu vulputate leo. Morbi vulputate ante sit amet lorem aliquet ultrices. Etiam sed aliquam lectus, in bibendum massa.
					<br/>
					<br/>
					Mauris feugiat leo ac nisl eleifend euismod ut in est. Sed sed luctus tortor. Curabitur condimentum, ex vitae tristique lacinia, nunc ex commodo ex, id imperdiet nulla lectus vitae massa. Cras vulputate non est in volutpat. Proin consequat, felis nec lobortis laoreet, elit orci rutrum metus, vel consequat diam risus id ipsum. Fusce ultricies nisl non aliquet pulvinar. Integer augue nisl, viverra dictum efficitur sed, tempor ac magna. Aliquam posuere ante turpis, sed maximus nunc ultricies nec.
				</p>
				<h2>Curabitur rhoncus sem maximus elit finibus</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tortor efficitur, sagittis nisi et, pharetra felis. Sed iaculis blandit luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque bibendum, nunc id sollicitudin interdum, diam magna placerat ipsum, nec mollis dui libero eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at purus ornare, ultrices erat vitae, faucibus libero. Maecenas pretium lorem nec neque euismod, eu molestie lacus vulputate. Donec non pharetra diam. Mauris eget iaculis urna. Donec mollis ultricies cursus. Vivamus eu vulputate leo. Morbi vulputate ante sit amet lorem aliquet ultrices. Etiam sed aliquam lectus, in bibendum massa.
					<br/>
					<br/>
					Mauris feugiat leo ac nisl eleifend euismod ut in est. Sed sed luctus tortor. Curabitur condimentum, ex vitae tristique lacinia, nunc ex commodo ex, id imperdiet nulla lectus vitae massa. Cras vulputate non est in volutpat. Proin consequat, felis nec lobortis laoreet, elit orci rutrum metus, vel consequat diam risus id ipsum. Fusce ultricies nisl non aliquet pulvinar. Integer augue nisl, viverra dictum efficitur sed, tempor ac magna. Aliquam posuere ante turpis, sed maximus nunc ultricies nec.
				</p>

				<Comments
					elements={comments}
					addCommentValue={commentValue}
					setAddCommentValue={setCommentValue}
					addComment={addComment}
				/>
			</div>
			<Footer
				noSocial={true}
			/>
		</div>
	);
};

export default PostDetail;