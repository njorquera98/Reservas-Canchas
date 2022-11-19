import express, { urlencoded, json } from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

app.use('/api', routes);

app.listen(app.get("port"), () => {
  console.log("Server esta en el puerto", app.get("port"));
});
