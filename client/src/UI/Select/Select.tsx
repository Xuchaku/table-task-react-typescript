import React, { ChangeEvent, FC } from "react";
import SelectValue from "../../types/SelectValue";
import "./Select.scss";
type SelectProps = {
  options: SelectValue[];
  defaultValue: SelectValue;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
const Select: FC<SelectProps> = ({ options, defaultValue, onChange }) => {
  return (
    <div className="Select">
      <select defaultValue={defaultValue.value} onChange={onChange}>
        <option value={defaultValue.value} disabled>
          {defaultValue.text}
        </option>
        {options.map((option, key) => {
          return (
            <option key={key} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
