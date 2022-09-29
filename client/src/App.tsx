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
    if (!filter.field || !filter.operator || !filter.query) {
      return rows.slice(firstIndex, lastIndex);
    } else {
      switch (filter.field) {
        case "title": {
          if (filter.operator == "in") {
            return rows
              .filter((row) => {
                return row.title
                  .toLowerCase()
                  .includes(filter.query.toString().toLowerCase());
              })
              .slice(firstIndex, lastIndex);
          } else {
            return rows.slice(firstIndex, lastIndex);
          }
          break;
        }
        default: {
          if (filter.operator == "<") {
            return rows
              .filter((row) => {
                return (
                  Number(row[filter.field as keyof RowType]) <
                  Number(filter.query)
                );
              })
              .slice(firstIndex, lastIndex);
          } else if (filter.operator == ">") {
            return rows
              .filter((row) => {
                return (
                  Number(row[filter.field as keyof RowType]) >
                  Number(filter.query)
                );
              })
              .slice(firstIndex, lastIndex);
          } else if (filter.operator == "=") {
            return rows
              .filter((row) => {
                return (
                  Number(row[filter.field as keyof RowType]) ==
                  Number(filter.query)
                );
              })
              .slice(firstIndex, lastIndex);
          } else {
            return rows.slice(firstIndex, lastIndex);
          }
          return rows;
          break;
        }
      }
    }
  }, [currentPage, filter, rows, actualRowsLength]);

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
