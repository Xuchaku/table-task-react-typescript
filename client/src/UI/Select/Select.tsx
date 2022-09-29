import React, { ChangeEvent, FC } from "react";
import SelectValue from "../../types/SelectValue";
import "./Select.scss";
type SelectProps = {
  options: SelectValue[];
  defaultValue: SelectValue;
  disableConfig: string[] | null;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
const Select: FC<SelectProps> = (props) => {
  const { options, defaultValue, onChange, disableConfig } = props;
  return (
    <div className="Select">
      <select defaultValue={defaultValue.value} onChange={onChange}>
        <option value={defaultValue.value} disabled>
          {defaultValue.text}
        </option>
        {options.map((option, key) => {
          return (
            <option
              key={key}
              value={option.value}
              disabled={
                Boolean(disableConfig) && !disableConfig?.includes(option.value)
              }
            >
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
