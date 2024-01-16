import React from "react";
import * as s from "../Pagination/Pagination.style";

export function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <s.Nav>
      <s.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </s.Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <s.Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : undefined}
          >
            {i + 1}
          </s.Button>
        ))}
      <s.Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </s.Button>
    </s.Nav>
  );
}
