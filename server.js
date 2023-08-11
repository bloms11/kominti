import express from "express";
import path from "path";
import bodyParser from "body-parser";
import apiRoutes from "./api/updateUsers.js";
import cors from "cors"; // Import the cors package
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(bodyParser.json());

// Use CORS middleware
app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));
app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
