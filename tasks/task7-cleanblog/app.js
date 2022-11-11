import express from "express";
import colors from "colors";
import ejs from 'ejs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import methodOverride from 'method-override'

import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "./controllers/blogController.js";
import { getAboutPage, getAddPostPage, getEditPage } from "./controllers/pageController.js";

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
app.use(methodOverride('_method', {
  methods: ["POST", "GET"]
}))

// ROUTES
app.get("/", getAllBlogs);
app.get("/post/:id", getBlog);
app.put("/post/:id", updateBlog);
app.post("/add_post",createBlog);
app.get("/post/edit/:id", getEditPage);
app.delete("/post/:id", deleteBlog);

app.get("/about", getAboutPage);
app.get("/add_post", getAddPostPage);


app.listen(port, () => {
  console.log(`Server is up port:${port}`.bgGreen.underline.bold);
});
