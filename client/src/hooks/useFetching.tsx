import RowType from "../types/RowType";
import { useEffect, useState } from "react";
import api from "./../services/api";

const useFetching = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);
  const [rows, setRows] = useState<RowType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const data = (await api.get(url)) as RowType[];
      if (data instanceof Error) {
        setRows([]);
        throw new Error(data.message);
      } else {
        setRows(data);
      }
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return { rows, isLoading, isError, setIsError };
};
export default useFetching;
