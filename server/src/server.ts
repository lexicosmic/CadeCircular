import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

import busRoute from "./routes/bus";
app.use("", busRoute);

app.listen(3333, () => console.log("Server is running on port 3333 🚀"));