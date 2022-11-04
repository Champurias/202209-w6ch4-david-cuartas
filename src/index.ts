import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import getThings from "./controllers/thingControlles";
import getId from "./controllers/getId";
dotenv.config();

const port = process.env.PORT;
const { log } = console;
const app = express();

app.use(morgan("dev"));

app.get("/things", getThings);
app.get("/things/:idThing", getId);
app.listen(port, () => {
  log(`Server starting: ${`http://localhost:${port}`}`);
});
