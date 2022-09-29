type FilterType = {
  field: "" | "title" | "value" | "distance";
  operator: "=" | ">" | "<" | "in" | "";
  query: number | string;
};
export default FilterType;
