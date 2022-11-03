import express from "express";
import morgan from "morgan";

const port = 4001;
let kittyName = "Rulo";

const app = express();

app.use(morgan("dev"));

app.get("/kitty", (req, res) => {
  res.status(200).json({ kittyName });
});

app.use("/*", (req, res) => {
  res.status(404).json({ message: "endpoint not found" });
});
const server = app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
server.on("error", (error) => {
  console.log(`there was an error starting the server ${error.message}`);
});
