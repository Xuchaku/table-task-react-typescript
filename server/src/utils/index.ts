import pg from "pg";
export const generateData = async function (
  client: pg.PoolClient,
  row: number,
  table: string | undefined
) {
  if (!table) {
    console.log("Set env table name");
    return;
  }
  const titles = ["Сила", "Разум", "Интелект", "Выносливость", "Ловкость"];
  for (let i = 0; i < row; i++) {
    const date = new Date(Math.random() * 100000000);
    const title =
      titles[titles.length - Math.ceil(Math.random() * titles.length)];
    const value = Math.floor(Math.random() * 9999);
    const distance = Math.floor(Math.random() * 9999);
    const queryStirng = `INSERT INTO ${table}("date", "title", "value", "distance") VALUES(${date.getTime()}, ${
      "'" + title + "'"
    }, ${value}, ${distance})`;
    client.query(queryStirng);
  }
};
export const getData = async (
  client: pg.PoolClient,
  table: string | undefined
) => {
  const queryStirng = `SELECT * FROM ${table}`;
  return client.query(queryStirng);
};
