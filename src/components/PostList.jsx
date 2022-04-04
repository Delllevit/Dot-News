import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
	if (!posts || !posts.length) {
		return (
			<div />
		);
	}

	return (
		<div className="post_list">

			{posts.map((post) => (
				<div key={post.url} className="post">
					<div className="img_block">
						<Link to={`/post/${post.url}/`}>
							<img src={post.img} alt="" />
						</Link>
					</div>
					<div className="content_block">
						<Link to={`/post/${post.url}/`} className="title">
							{post.title}
						</Link>
						<div className="text">
							{post.text}
						</div>
						<div className="category">
							{post.category}
						</div>
					</div>
				</div>
			))}

		</div>
	);
}

export default PostList;
