import { MouseEventHandler } from "react";
import api from "../services/api";
export const generateDataOnServer = async (
  url: string,
  count: number,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await api.generate(url + count);
    if (response instanceof Error) {
      throw new Error(response.message);
    }
  } catch (err) {
    setError(true);
  }
};
