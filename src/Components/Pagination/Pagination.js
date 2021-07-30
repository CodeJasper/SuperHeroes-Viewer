import React, { useCallback } from "react";
import { TOTAL_PAGES } from "../../Global-constants/GlobalConstants";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import "./Pagination.css";

export default function Pagination() {
  const [pages, setPages] = useState([]);
  const paramsRoute = useParams();
  const history = useHistory();

  const updateCurrentPage = useCallback(
    (page) => {
      history.push(`/list/${page}`);
    },
    [history]
  );

  useEffect(() => {
    let currentPage = parseInt(paramsRoute.page) || 1;
    if (currentPage > TOTAL_PAGES) {
      history.push("/list/1");
      currentPage = 1;
    }
    setPages([]);
    const firstPageHtml = (
      <li className="page" key="<<" onClick={() => updateCurrentPage(1)}>
        &lt;&lt;
      </li>
    );
    setPages((pages) => [...pages, firstPageHtml]);
    for (let i = 1; i <= TOTAL_PAGES; i++) {
      if (i === currentPage) {
        const pageHTML = (
          <li
            className="page active"
            key={i}
            onClick={() => updateCurrentPage(i)}
          >
            {i}
          </li>
        );
        setPages((pages) => [...pages, pageHTML]);
      } else if (i <= currentPage + 2 && i >= currentPage - 2) {
        const pageHTML = (
          <li className="page" key={i} onClick={() => updateCurrentPage(i)}>
            {i}
          </li>
        );
        setPages((pages) => [...pages, pageHTML]);
      } else if (
        (currentPage < 3 && i <= 5) ||
        (currentPage > TOTAL_PAGES - 2 && i >= TOTAL_PAGES - 2 - 2)
      ) {
        const pageHTML = (
          <li className="page" key={i} onClick={() => updateCurrentPage(i)}>
            {i}
          </li>
        );
        setPages((pages) => [...pages, pageHTML]);
      }
    }
    const lastPageHtml = (
      <li
        className="page"
        key=">>"
        onClick={() => updateCurrentPage(TOTAL_PAGES)}
      >
        &gt;&gt;
      </li>
    );
    setPages((pages) => [...pages, lastPageHtml]);
  }, [paramsRoute, history, updateCurrentPage]);

  return (
    <div className="container-pagination">
      <ul className="pagination">
        {pages.length > 0 &&
          pages.map((item) => {
            return item;
          })}
      </ul>
    </div>
  );
}
