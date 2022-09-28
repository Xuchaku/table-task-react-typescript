import React, { FC } from "react";
import "./Pagination.scss";
type PaginationProps = {
  currentPage: number;
};
const Pagination: FC<PaginationProps> = ({ currentPage }) => {
  return <div className="Pagination">Pagination</div>;
};

export default Pagination;
