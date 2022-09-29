import SelectValue from "../types/SelectValue";

export const POINT_SERVER = "http://localhost:8000";
export const FIRST_SELECT_VALUES: SelectValue[] = [
  { value: "title", text: "Название" },
  { value: "value", text: "Количество" },
  { value: "distance", text: "Расстояние" },
];
export const SECOND_SELECT_VALUES: SelectValue[] = [
  { value: "=", text: "Равенство" },
  { value: ">", text: "Больше" },
  { value: "<", text: "Меньше" },
  { value: "in", text: "Содержит" },
];
