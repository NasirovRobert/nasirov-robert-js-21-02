import React from 'react';
import './Pagination.css';

interface Props {
  total: number,
  limit: number,
  page: number,
  goPage: Function
}

export default function Pagination(props: Props) {
  function showPagination(page: number) {
    const paginationArray = [];
    // eslint-disable-next-line no-plusplus
    for (let i = -4; i < 5; i++) {
      if (!(((page + i) < 1) || ((page + i) > Math.ceil(((props.total - props.limit) / props.limit))))) {
        if (i === 0) {
          paginationArray.push(
            <button
              type="button"
              key={page + i}
              className="pagination__button_active"
            >
              {page + i}
            </button>,
          );
        } else {
          paginationArray.push(
            <button
              type="button"
              onClick={() => props.goPage(page + i)}
              key={page + i}
              className="pagination__button"
            >
              {page + i}
            </button>,
          );
        }
      }
    }
    return paginationArray;
  }

  return (
    <div className="pagination__div">
      {props.page && showPagination(props.page)}
    </div>
  );
}
