import express from "express";
import colors from "colors";
import ejs from 'ejs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
import methodOverride from 'method-override'
dotenv.config()
import { getAllPhotos, getPhoto, createPhoto, updatePhoto, deletePhoto } from './controllers/photoController.js'
import { getAboutPage, getAddPage, getEditPage } from './controllers/pageController.js'


const app = express();
const port = process.env.PORT || 5000;

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
app.use(fileUpload())
app.use(methodOverride('_method', {
  methods: ["POST", "GET"]
}))


// ROUTES
app.get("/", getAllPhotos);
app.get("/photos/:id", getPhoto);
app.post("/photos", createPhoto);
app.put("/photos/:id", updatePhoto);
app.delete("/photos/:id", deletePhoto);

app.get("/about", getAboutPage);
app.get("/add", getAddPage);
app.get("/photos/edit/:id", getEditPage);

app.listen(port, () => {
  console.log(`Server is up port:${port}`.bgGreen.underline.bold);
});
