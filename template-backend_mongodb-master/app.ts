import express from "express";
const PORT = process.env.PORT || 2030;
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import * as swaggerDocument from "./swagger.json";
import swaggerUi = require("swagger-ui-express");
require("dotenv").config();

// Rotas
import rotaSample from "./routes/rotaSample";

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/template/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connection mongoDB
mongoose.connect(`mongodb://${process.env.SERVER}/${process.env.DB}`, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

// Rotas
app.use("/", rotaSample);

export default app;

// Server
if (process.env.JEST_WORKER_ID === undefined) {
  app.listen(PORT, () => console.log(`#Running on port => ${PORT}!`));
}
