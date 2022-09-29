import React, { ChangeEvent, FC } from "react";
import { FIRST_SELECT_VALUES, SECOND_SELECT_VALUES } from "../../constants";
import FilterType from "../../types/FilterType";
import Input from "../../UI/Input/Input";
import Select from "../../UI/Select/Select";
import "./Filter.scss";

type FilterProps = {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
};
const Filter: FC<FilterProps> = ({ filter, setFilter }) => {
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
        onChange={changeFilterHandler("field")}
        defaultValue={{ value: "field", text: "Поле" }}
        options={FIRST_SELECT_VALUES}
      ></Select>
      <Select
        onChange={changeFilterHandler("operator")}
        defaultValue={{ value: "selector", text: "Селектор" }}
        options={SECOND_SELECT_VALUES}
      ></Select>
      <Input
        onChange={changeFilterHandler("query")}
        value={filter.query}
      ></Input>
    </div>
  );
};

export default Filter;
