type FilterType = {
  field: string;
  operator: "=" | ">" | "<" | "in";
  query: number | string;
};
export default FilterType;
