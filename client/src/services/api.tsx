class Api {
  constructor() {}
  async get(url: string) {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    return new Error("Сервер недоступен!");
  }
}

const api = new Api();
export default api;
