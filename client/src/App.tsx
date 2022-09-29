import React, { useMemo, useState } from "react";
import "./App.scss";

import Filter from "./components/Filter/Filter";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";
import FilterType from "./types/FilterType";
import RowType from "./types/RowType";
import useFetching from "./hooks/useFetching";
import { GENERATE_DATA_URL, GET_DATA_URL, ROW_IN_PAGE } from "./constants";
import ErrorTip from "./UI/ErrorTip/ErrorTip";
import Loader from "./UI/Loader/Loader";
import usePagination from "./hooks/usePagination";
import calculateRows from "./utils/calculateRows";
import Button from "./UI/Button/Button";
import { generateDataOnServer } from "./utils/generateDataOnServer";

function App() {
  const [filter, setFilter] = useState<FilterType>({
    field: "",
    operator: "",
    query: "",
  });
  //используем кастомный хук для загрузки строк.
  const { rows, isLoading, isError, setIsError } = useFetching(GET_DATA_URL);
  const [actualRowsLength, setActualRowsLength] = useState(rows.length);
  //используем кастомный хук для определения текущей страницы, общего числа страницы, левую и правую границы среза массива строк
  const { currentPage, totalPage, lastIndex, firstIndex, prev, next, setPage } =
    usePagination(ROW_IN_PAGE, actualRowsLength);

  //высчитываем на основе пользовательского ввода, текущей страницы, отфильтрованный массив строк
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
  //функция загрузки данных на сервер !!!(не на стороне клиента)
  function wrapperGetDataOnServer() {
    generateDataOnServer(GENERATE_DATA_URL, 20, setIsError);
  }
  return (
    <div className="App">
      <h1>Приложение - Таблица</h1>
      <Filter
        start={firstIndex}
        finish={lastIndex}
        totalLength={actualRowsLength}
        filter={filter}
        setFilter={setFilter}
      />
      {isLoading ? <Loader /> : <Table rows={currentRows} />}
      <Pagination
        setPage={setPage}
        currentPage={currentPage}
        totalPage={totalPage}
        prev={prev}
        next={next}
      />
      {isError && <ErrorTip />}
      <Button onClick={wrapperGetDataOnServer}></Button>
    </div>
  );
}

export default App;
