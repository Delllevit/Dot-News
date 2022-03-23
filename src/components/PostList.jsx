import React from 'react';
import classes from "./PostList.module.scss";
import { Link } from 'react-router-dom';

const PostList = ({posts}) => {

	if( !posts.length ){
		return (
			<>
			</>
		);
	}
	return (

		<div className={classes.post_list}>

			{posts.map((post, index) =>

				<div key={index} className={classes.post}>
					<div className={classes.img_block}>
						<Link to={`/post/${post.url}/`}>
							<img src={post.img} alt=""/>
						</Link>
					</div>
					<div className={classes.content_block}>
						<Link to={`/post/${post.url}/`} className={classes.title}>
							{post.title}
						</Link>
						<div className={classes.text}>
							{post.text}
						</div>
						<div className={classes.category}>
							{post.category}
						</div>
					</div>
				</div>

			)}

		</div>
	);
};

export default PostList;