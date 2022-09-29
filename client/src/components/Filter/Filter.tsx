import React, { ChangeEvent, FC, useMemo } from "react";
import { FIRST_SELECT_VALUES, SECOND_SELECT_VALUES } from "../../constants";
import FilterType from "../../types/FilterType";
import Input from "../../UI/Input/Input";
import Select from "../../UI/Select/Select";
import "./Filter.scss";

type FilterProps = {
  filter: FilterType;
  start: number;
  finish: number;
  totalLength: number;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
};
const Filter: FC<FilterProps> = (props) => {
  const { filter, setFilter, start, finish, totalLength } = props;
  //высчитываем на основе выбранной первой колонки доступные операции
  const disableConfigOperationSelect = useMemo(() => {
    if (filter.field == "title") {
      const allowedOperations = ["in"];
      return allowedOperations;
    } else if (filter.field == "distance" || filter.field == "value") {
      const allowedOperations = [">", "<", "="];
      return allowedOperations;
    } else {
      return null;
    }
  }, [filter]);
  function changeFilterHandler(field: string) {
    return function (
      event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
    ) {
      setFilter({ ...filter, [field]: event.target.value });
    };
  }
  return (
    <div className="Filter">
      <Select
        disableConfig={null}
        onChange={changeFilterHandler("field")}
        defaultValue={{ value: "field", text: "Поле" }}
        options={FIRST_SELECT_VALUES}
      ></Select>
      <Select
        disableConfig={disableConfigOperationSelect}
        onChange={changeFilterHandler("operator")}
        defaultValue={{ value: "selector", text: "Селектор" }}
        options={SECOND_SELECT_VALUES}
      ></Select>
      <Input
        onChange={changeFilterHandler("query")}
        value={filter.query}
      ></Input>
      <p>
        <span>{start + 1}</span>-
        <span>{finish > totalLength ? totalLength : finish}</span> из{" "}
        <span>{totalLength}</span>
      </p>
    </div>
  );
};

export default Filter;
