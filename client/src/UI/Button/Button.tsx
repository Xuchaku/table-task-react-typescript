import React, { FC, MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
  onClick: () => void;
};
const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className="Button">
      <button onClick={onClick}>Сгенерировать данные на сервер</button>
    </div>
  );
};

export default Button;
