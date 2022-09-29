import React, { useMemo, useState } from "react";
import "./App.scss";

import Filter from "./components/Filter/Filter";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";
import FilterType from "./types/FilterType";
import RowType from "./types/RowType";
import useFetching from "./hooks/useFetching";
import { POINT_SERVER } from "./constants";
import ErrorTip from "./UI/ErrorTip/ErrorTip";
import Loader from "./UI/Loader/Loader";
import usePagination from "./hooks/usePagination";
import calculateRows from "./utils/calculateRows";

function App() {
  const [filter, setFilter] = useState<FilterType>({
    field: "",
    operator: "",
    query: "",
  });

  const { rows, isLoading, isError } = useFetching(POINT_SERVER);
  const [actualRowsLength, setActualRowsLength] = useState(rows.length);

  const { currentPage, totalPage, lastIndex, firstIndex, prev, next, setPage } =
    usePagination(5, actualRowsLength);

  const currentRows: RowType[] = useMemo(() => {
    return calculateRows(
      rows,
      filter,
      firstIndex,
      lastIndex,
      setActualRowsLength
    );
  }, [
    currentPage,
    filter,
    rows,
    actualRowsLength,
    firstIndex,
    lastIndex,
    actualRowsLength,
    currentPage,
  ]);

  return (
    <div className="App">
      <h1>Приложение - Таблица</h1>
      <Filter filter={filter} setFilter={setFilter} />
      {isLoading ? <Loader /> : <Table rows={currentRows} />}
      <Pagination
        setPage={setPage}
        currentPage={currentPage}
        totalPage={totalPage}
        prev={prev}
        next={next}
      />
      {isError && <ErrorTip />}
    </div>
  );
}

export default App;
