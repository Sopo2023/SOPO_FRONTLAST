import React, { useState } from "react";
import * as s from "./Pagination.style";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const [page, setPage] = useState(1); // 페이지 상태 추가

  const numPages = Math.ceil(totalPosts / postsPerPage);
  const maxDisplayedPages = 5; // 최대로 보여질 페이지 수
  const halfDisplayedPages = Math.floor(maxDisplayedPages / 2); // 최대 페이지 수의 절반

  let startPage = Math.max(page - halfDisplayedPages, 1); // 시작 페이지
  let endPage = Math.min(startPage + maxDisplayedPages - 1, numPages); // 마지막 페이지

  if (endPage - startPage + 1 < maxDisplayedPages) {
    // 보여질 페이지 수가 최대 페이지 수보다 작은 경우
    startPage = Math.max(endPage - maxDisplayedPages + 1, 1);
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= numPages) {
      setPage(newPage);
    }
  };

  return (
    <s.Nav>
      <s.Button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </s.Button>
      {Array(endPage - startPage + 1)
        .fill(0)
        .map((_, i) => (
          <s.Button
            key={startPage + i}
            onClick={() => handlePageChange(startPage + i)}
            aria-current={page === startPage + i ? "page" : undefined}
          >
            {startPage + i}
          </s.Button>
        ))}
      <s.Button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === numPages}
      >
        &gt;
      </s.Button>
    </s.Nav>
  );
};

export default Pagination;
