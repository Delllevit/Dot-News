import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from './PostList';
import Pagination from './UI/Pagination/Pagination';
import ShowMore from './UI/ShowMore/ShowMore';
import useObserver from '../hooks/useObserver';

import { loadPosts } from '../store/actions';
import { getPostsPagerAr } from '../utils/getPostsPagerAr';

function Posts({ paginationFix }) {
	const dispatch = useDispatch();

	const [activeShowMore, setActiveShowMore] = useState(false);
	const showMoreElement = useRef();
	const containerElement = useRef();

	const limit = 12;
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const postsDisp = useSelector((state) => {
		const { postReducer } = state;
		return postReducer.posts;
	});

	useEffect(() => {
		dispatch(loadPosts());
	}, []);

	const showMoreElements = () => {
		if (page < totalPages) {
			const response = getPostsPagerAr(postsDisp, limit, page + 1);

			setPosts([...posts, ...response.items]);
			setActiveShowMore(true);
			setPage(page + 1);
		}
	};

	useEffect(() => {
		if (!activeShowMore && postsDisp) {
			const response = getPostsPagerAr(postsDisp, limit, page);

			setTotalPages(response.totalPages);
			setPosts(response.items);
		}
	}, [page, postsDisp]);

	useObserver(showMoreElement, page <= totalPages && activeShowMore, page, () => {
		if (page === totalPages) {
			setActiveShowMore(false);
		}
		showMoreElements();
	});

	return (
		<div className="post-container" ref={containerElement}>
			<PostList posts={posts} />
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
}

export default Posts;
