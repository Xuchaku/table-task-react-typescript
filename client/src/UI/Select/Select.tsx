import React from "react";
import "./Select.scss";
const Select = () => {
  return (
    <div className="Select">
      <select defaultValue={"1"}>
        <option value="1" disabled>
          Пункт 1
        </option>
        <option value="2">Пункт 1</option>
        <option value="3">Пункт 2</option>
      </select>
    </div>
  );
};

export default Select;
