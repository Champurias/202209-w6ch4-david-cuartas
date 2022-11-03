import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
let kittyName = "Rulo";

const app = express();

app.use(morgan("dev"));

app.get("/kitty", (req, res) => {
  res.status(200).json({ kittyName });
});

app.use("/*", (req, res) => {
  res.status(200).json({ message: "endpoint not found" });
});
const server = app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
server.on("error", (error) => {
  console.log(`there was an eerror starting the server ${error.message}`);
});
