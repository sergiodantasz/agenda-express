import express from "express";
import path from "path";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(import.meta.dirname, "public")));

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
