import express from "express";
import colors from "colors";
import path from 'path'
import { fileURLToPath } from 'url';
import ejs from 'ejs'
import { Photo } from './Models/Photo.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// ROUTES
app.get("/", async (req, res) => {
  const photos = await Photo.find({})
  res.render("index", {
    photos
  });
});



app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/photos", async (req, res) => {
  await Photo.create(req.body)
  res.redirect("/")
});

app.get("/photos/:id",async (req, res) => {
  //console.log(req.params.id);
  const photo = await Photo.findById(req.params.id)
  res.render("photo",{
    photo
  })
});

app.listen(port, () => {
  console.log(`Server is up port:${port}`.bgGreen.underline.bold);
});
