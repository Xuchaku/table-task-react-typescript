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

function App() {
  const [filter, setFilter] = useState<FilterType>({
    field: "",
    operator: "=",
    query: "",
  });
  const [page, setPage] = useState<number>(1);
  const { rows, isLoading, isError } = useFetching(POINT_SERVER);

  const currentRows: RowType[] = useMemo(() => {
    return rows;
  }, [page, filter, rows]);

  return (
    <div className="App">
      <h1>Приложение - Таблица</h1>
      <Filter filter={filter} />
      {isLoading ? <Loader /> : <Table rows={currentRows} />}
      <Pagination currentPage={page} />
      {isError && <ErrorTip />}
    </div>
  );
}

export default App;
