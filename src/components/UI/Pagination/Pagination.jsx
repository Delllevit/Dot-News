import React, {useEffect} from 'react';
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, page, changesPage, fixed}) => {
	let mainClass = 'pagination';

	if( fixed ){
		mainClass = 'pagination fixed';
	}

	let pagesArray = usePagination(totalPages);
	return (
		<div className={mainClass}>
			<span className="title">Сторінка</span>
			<ul>
				{pagesArray.map(p =>
					<li
						onClick={() => changesPage(p)}
						key={p}
						className={page === p ? 'current' : ''}
					>
						{p}
					</li>
				)}
			</ul>
		</div>
	);
};

export default Pagination;