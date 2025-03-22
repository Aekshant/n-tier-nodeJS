import express from "express";
import Routes from "../index.router"
const app = express();
app.use(express.json());

app.use("/v1", Routes);


export default app;