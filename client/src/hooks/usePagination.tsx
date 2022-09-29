import { useMemo, useState } from "react";

const usePagination = (rowInOnePage: number, totalRow: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = useMemo(() => {
    setCurrentPage(1);
    return Math.ceil(totalRow / rowInOnePage);
  }, [totalRow, rowInOnePage]);
  const lastIndex = currentPage * rowInOnePage;
  const firstIndex = lastIndex - rowInOnePage;
  function prev() {
    if (currentPage != 1) setCurrentPage((prev) => --prev);
    else setCurrentPage(currentPage);
  }
  function next() {
    if (currentPage != totalPage) setCurrentPage((prev) => ++prev);
    else setCurrentPage(currentPage);
  }
  function setPage(page: number) {
    setCurrentPage(page);
  }
  return {
    currentPage,
    totalPage,
    lastIndex,
    firstIndex,
    setPage,
    prev,
    next,
  };
};
export default usePagination;
