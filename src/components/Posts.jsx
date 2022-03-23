import React, {useEffect, useRef, useState} from 'react';
import PostList from "./PostList";
import Pagination from "./UI/Pagination/Pagination";
import ShowMore from "./UI/ShowMore/ShowMore";
import PostService from "./API/PostService";
import {useObserver} from "../hooks/useObserver";

const Posts = ({paginationFix}) => {

	const showMoreElement = useRef();
	const containerElement = useRef();
	const [totalPages, setTotalPages] = useState(0);
	const [activeShowMore, setActiveShowMore] = useState(false);
	const [limit, setLimit] = useState(12);
	const [page, setPage] = useState(1);
	const [posts, setPosts] = useState([]);


	useEffect(() => {

		if( !activeShowMore ){
			const response = PostService.getAll(limit, page);
			const totalCount = response.totaCount;

			setTotalPages(response.totaPages);
			setPosts(response.items);
		}

	}, [page]);


	useObserver(showMoreElement, page <= totalPages && activeShowMore, page, () => {

		if(page === totalPages){
			setActiveShowMore(false);
		}
		showMoreElements();
	})

	const showMoreElements = () => {

		if( page < totalPages ) {
			const response = PostService.getAll(limit, page);

			setPosts([...posts, ...response.items]);
			setActiveShowMore(true);
			setPage(page + 1);
		}
	}

	return (
		<div className="post-container" ref={containerElement}>
			<PostList posts={posts}/>
			<Pagination
				page={page}
				changesPage={setPage}
				totalPages={totalPages}
				fixed={paginationFix}
			/>

			<ShowMore
				refElement={showMoreElement}
				page={page}
				active={activeShowMore}
				setActive={showMoreElements}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default Posts;