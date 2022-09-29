import FilterType from "../types/FilterType";
import RowType from "../types/RowType";
//функция вычисления текущего отфильтврованного массива строк
const calculateRows = (
  rows: RowType[],
  filter: FilterType,
  firstIndex: number,
  lastIndex: number,
  setActualRowsLength: React.Dispatch<React.SetStateAction<number>>
) => {
  if (!filter.field || !filter.operator || !filter.query) {
    setActualRowsLength(rows.length);
    if (rows.length) return rows.slice(firstIndex, lastIndex);
    return rows;
  } else {
    switch (filter.field) {
      case "title": {
        if (filter.operator == "in") {
          const actualRows = rows.filter((row) => {
            return row.title
              .toLowerCase()
              .includes(filter.query.toString().toLowerCase());
          });
          setActualRowsLength(actualRows.length);
          return actualRows.slice(firstIndex, lastIndex);
        } else {
          setActualRowsLength(rows.length);
          return rows.slice(firstIndex, lastIndex);
        }
        break;
      }
      default: {
        if (filter.operator == "<") {
          const actualRows = rows.filter((row) => {
            return (
              Number(row[filter.field as keyof RowType]) < Number(filter.query)
            );
          });
          setActualRowsLength(actualRows.length);
          return actualRows.slice(firstIndex, lastIndex);
        } else if (filter.operator == ">") {
          const actualRows = rows.filter((row) => {
            return (
              Number(row[filter.field as keyof RowType]) > Number(filter.query)
            );
          });
          setActualRowsLength(actualRows.length);
          return actualRows.slice(firstIndex, lastIndex);
        } else if (filter.operator == "=") {
          const actualRows = rows.filter((row) => {
            return (
              Number(row[filter.field as keyof RowType]) == Number(filter.query)
            );
          });
          setActualRowsLength(actualRows.length);
          return actualRows.slice(firstIndex, lastIndex);
        } else {
          setActualRowsLength(rows.length);
          return rows.slice(firstIndex, lastIndex);
        }
        return rows;
        break;
      }
    }
  }
};

export default calculateRows;
