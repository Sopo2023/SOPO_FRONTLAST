import React from "react";
import PropTypes from "prop-types";
import * as s from "../Pagination/Pagination.style";

interface PaginationProps {
  total: number; // 전체 아이템 수
  limit: number; // 한 페이지에 보여질 아이템 수
  page: number; // 현재 페이지
  setPage: (page: number) => void; // 페이지 변경 함수
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit,
  page,
  setPage,
}) => {
  const numPages = Math.ceil(total / limit);
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

Pagination.propTypes = {
  total: PropTypes.number.isRequired, // 전체 아이템 수
  limit: PropTypes.number.isRequired, // 한 페이지에 보여질 아이템 수
  page: PropTypes.number.isRequired, // 현재 페이지
  setPage: PropTypes.func.isRequired, // 페이지 변경 함수
};

export default Pagination;
