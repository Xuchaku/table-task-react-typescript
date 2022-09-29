import React, { FC } from "react";
import "./Pagination.scss";
type PaginationProps = {
  currentPage: number;
  totalPage: number;
  prev: () => void;
  next: () => void;
  setPage: (page: number) => void;
};
const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPage,
  prev,
  next,
  setPage,
}) => {
  const arrNum = Array.from({ length: totalPage }, (x, i) => ++i);
  return (
    <div className="Pagination">
      <span onClick={prev}>&lt;</span>
      <div>
        {arrNum.map((page) => {
          if (currentPage - page == 1)
            return <span onClick={setPage.bind(null, page)}>{page}</span>;
          if (currentPage == page) {
            return <span className="active">{currentPage}</span>;
          }
          if (page - currentPage == 1)
            return <span onClick={setPage.bind(null, page)}>{page}</span>;
        })}
      </div>
      <span onClick={next}>&gt;</span>
    </div>
  );
};

export default Pagination;
