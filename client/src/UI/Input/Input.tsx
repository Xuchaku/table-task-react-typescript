import React, { ChangeEvent, FC } from "react";
import "./Input.scss";
type InputProps = {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <div className="Input">
      <input
        onChange={onChange}
        type="text"
        value={value}
        placeholder="Поиск..."
      />
    </div>
  );
};

export default Input;
