import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/applicant", userRoute);
dotenv.config();
const URL =
  "mongodb+srv://woody03:123@cluster0.ykdum.mongodb.net/practice1130?retryWrites=true&w=majority";
mongoose
  .connect(URL)
  .then(() => console.log("conected successfully"))
  .catch((err) => console.log(err.message));
app.listen(4321, () => {
  console.log("server is running on port 4321");
});
