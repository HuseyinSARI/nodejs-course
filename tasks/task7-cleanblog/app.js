import express from "express";
import colors from "colors";
import path from 'path'
import { fileURLToPath } from 'url';
import ejs from 'ejs'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.listen(port, () => {
  console.log(`Server is up port:${port}`.bgGreen.underline.bold);
});
