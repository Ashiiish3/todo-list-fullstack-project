const express = require("express");
const connectMongoDB = require("./utils/db");
const todoRoutes = require("./routes/todo.routes");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    header: ["Content-Type", "Authorization"],
  })
);

app.use("/api", todoRoutes);

app.listen(process.env.PORT || 5000, async () => {
  try {
    await connectMongoDB;
    console.log(`server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
