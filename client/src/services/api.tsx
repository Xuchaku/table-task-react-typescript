import RowType from "../types/RowType";

class Api {
  constructor() {}
  async get(url: string) {
    // const response = await fetch(url);
    // if (response.ok) {
    //   const json = await response.json();
    //   return json;
    // }
    // return new Error("Сервер недоступен!");
    const data: RowType[] = [
      { date: new Date(), title: "ABC", value: 123, distance: 33 },
      { date: new Date(), title: "BBB", value: 63, distance: 111 },
      { date: new Date(), title: "CC", value: 4132, distance: 434 },
      { date: new Date(), title: "CDF", value: 23, distance: 33 },
      { date: new Date(), title: "FDF", value: 132, distance: 24324 },
      { date: new Date(), title: "AS", value: 123, distance: 24 },
      { date: new Date(), title: "DS", value: 22, distance: 2434 },
      { date: new Date(), title: "DFFD", value: 11, distance: 333 },
    ];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
}

const api = new Api();
export default api;
