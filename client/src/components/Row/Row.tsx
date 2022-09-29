import React, { FC } from "react";
import "./Row.scss";
import RowType from "./../../types/RowType";

type RowProps = {
  data: RowType;
};
const Row: FC<RowProps> = ({ data }) => {
  const { date, title, value, distance } = data;
  return (
    <tr>
      <td>{`${date.getFullYear()}.${
        date.getMonth() + 1
      }.${date.getDate()}`}</td>
      <td>{title}</td>
      <td>{value}</td>
      <td>{distance}</td>
    </tr>
  );
};

export default Row;
