import RowType from "../types/RowType";

class Api {
  constructor() {}
  async get(url: string) {
    const response = await fetch(url);
    if (response.ok) {
      const json = (await response.json()) as RowType[];
      console.log(json);
      return json.map((obj) => {
        return { ...obj, date: new Date(Number(obj.date)) };
      });
    }
    return new Error("Сервер недоступен!");
  }
  async generate(url: string) {
    const response = await fetch(url);
    if (response.ok) {
      return "Данные успешно сгенерированы";
    }
    return new Error("Сервер недоступен!");
  }
}

const api = new Api();
export default api;
