import React, { FC } from "react";
import FilterType from "../../types/FilterType";
import Input from "../../UI/Input/Input";
import Select from "../../UI/Select/Select";
import "./Filter.scss";
type FilterProps = {
  filter: FilterType;
};
const Filter: FC<FilterProps> = ({ filter }) => {
  return (
    <div className="Filter">
      <Select></Select>
      <Select></Select>
      <Input></Input>
    </div>
  );
};

export default Filter;
