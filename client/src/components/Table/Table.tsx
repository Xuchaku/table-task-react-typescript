import React, { FC } from "react";
import RowType from "../../types/RowType";
import Row from "../Row/Row";
import "./Table.scss";
type TableProps = {
  rows: RowType[];
};
const Table: FC<TableProps> = ({ rows }) => {
  return (
    <div className="Table">
      <table>
        <tr>
          <th>Дата</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Расстояние</th>
        </tr>
        {rows.map((row, key) => {
          return <Row key={key} data={row}></Row>;
        })}
      </table>
    </div>
  );
};

export default Table;
