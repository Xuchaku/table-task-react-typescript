import SelectValue from "../types/SelectValue";

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
export const ROW_IN_PAGE = 10;
export const GENERATE_DATA_URL = "http://localhost:8000/generate/";
export const GET_DATA_URL = "http://localhost:8000/getdata";
