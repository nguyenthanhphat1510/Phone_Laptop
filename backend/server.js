import express from "express";
import cors from "cors";
import 'dotenv/config';
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";

//app config
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

//api endpoints for user
app.use("/api/user", userRouter)
//api endpoints for product
app.use("/api/product", productRouter)
app.use("/images",express.static('uploads'))


app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
