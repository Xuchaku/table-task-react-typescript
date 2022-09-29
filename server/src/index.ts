import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

import { generateData, getData } from "./utils";
dotenv.config();
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: process.env.PG_DB_NAME,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT) || 5432,
});
let client: null | pg.PoolClient = null;

(async function () {
  client = await pool.connect();
  console.log("OK");
})();

const app = express();
app.use(cors());

app.get("/generate/:number", async (req, res) => {
  const num = Number(req.params.number);
  if (!num || isNaN(num) || num > 100) {
    return res.status(400).send("Invalid data");
  }
  if (client) {
    const reposneDb = await generateData(
      client,
      num,
      process.env.PG_TABLE_NAME
    );
    return res.status(200).send("Generated data");
  } else {
    return res.status(400).send("Not allowed db");
  }
});
app.get("/getdata", async (req, res) => {
  if (client) {
    const responseDb = await getData(client, process.env.PG_TABLE_NAME);
    const rows = responseDb.rows;
    res.status(200).send(rows);
  } else {
    res.status(400).send("Not allowed db");
  }
});

app.listen(process.env.PORT_APP || 8000, () => {
  console.log("Server started");
});
