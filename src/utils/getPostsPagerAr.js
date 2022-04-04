import {chunkArray} from './chankArray';

export const getPostsPagerAr = (posts, limit, page) => {
	const chunkItems = chunkArray(posts, limit);

	return {
		items: chunkItems[page - 1],
		totalCount: posts.length,
		totalPages: chunkItems.length,
	};
};
