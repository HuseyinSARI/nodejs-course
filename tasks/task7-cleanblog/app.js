import express from "express";
import colors from "colors";
import path from 'path'
import { fileURLToPath } from 'url';
import ejs from 'ejs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {Blog} from './models/Blog.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()

const app = express();
const port = 3000;

// Connect DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER_NAME}.vrot0gz.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    )
    console.log(`MongoDB Connected: ${conn.connection.host}`.green.bgGreen.bold);
  } catch (error) {
    console.log(`ERROR : ${error.message}`.red.bold);
    process.exit(1);
  }
}
connectDB();


// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// ROUTES
app.get("/", async (req, res) => {
  const blog = await Blog.find({})
  res.render("index",{
    blog
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.get("/post/:id", async(req, res) => {
  const blog = await Blog.findById(req.params.id)
  res.render("post",{
    blog
  });
});

app.post("/add_post", async (req, res) => {
  await Blog.create(req.body)
  res.redirect("/")
});

app.listen(port, () => {
  console.log(`Server is up port:${port}`.bgGreen.underline.bold);
});
