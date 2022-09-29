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
    operator: "",
    query: "",
  });
  const [page, setPage] = useState<number>(1);
  const { rows, isLoading, isError } = useFetching(POINT_SERVER);

  const currentRows: RowType[] = useMemo(() => {
    if (!filter.field || !filter.operator || !filter.query) {
      return rows;
    } else {
      switch (filter.field) {
        case "title": {
          if (filter.operator == "in") {
            return rows.filter((row) => {
              return row.title
                .toLowerCase()
                .includes(filter.query.toString().toLowerCase());
            });
          } else {
            return rows;
          }
          break;
        }
        default: {
          if (filter.operator == "<") {
            return rows.filter((row) => {
              return (
                Number(row[filter.field as keyof RowType]) <
                Number(filter.query)
              );
            });
          } else if (filter.operator == ">") {
            return rows.filter((row) => {
              return (
                Number(row[filter.field as keyof RowType]) >
                Number(filter.query)
              );
            });
          } else if (filter.operator == "=") {
            return rows.filter((row) => {
              return (
                Number(row[filter.field as keyof RowType]) ==
                Number(filter.query)
              );
            });
          } else {
            return rows;
          }
          return rows;
          break;
        }
      }
    }
  }, [page, filter, rows]);

  return (
    <div className="App">
      <h1>Приложение - Таблица</h1>
      <Filter filter={filter} setFilter={setFilter} />
      {isLoading ? <Loader /> : <Table rows={currentRows} />}
      <Pagination currentPage={page} />
      {isError && <ErrorTip />}
    </div>
  );
}

export default App;
