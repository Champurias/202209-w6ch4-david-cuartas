import express from "express";
import morgan from "morgan";

const port = 4000;
let kittyName = "Rulo";

const app = express();

app.use(morgan("dev"));

app.get("/hola", (req, res) => {
  res.status(200).json({});
});
