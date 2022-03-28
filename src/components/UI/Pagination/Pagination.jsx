import React from 'react';
import usePagination from '../../../hooks/usePagination';

function Pagination({ totalPages, page, changesPage, fixed }) {
  let mainClass = 'pagination';

  if (fixed) {
    mainClass = 'pagination fixed';
  }

  const pagesArray = usePagination(totalPages);
  return (
    <div className={mainClass}>
      <span className="title">Сторінка</span>
      <ul>
        {pagesArray.map((p) => (
          <li key={p}>
            <button type="button" onClick={() => changesPage(p)} className={page === p ? 'current' : ''}>
              {p}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
