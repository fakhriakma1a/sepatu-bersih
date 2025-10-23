import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Root endpoint for testing
app.get("/", (req, res) => {
  res.json({ message: "Sepatu Bersih API is running!" });
});

app.use("/api/item", itemRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
