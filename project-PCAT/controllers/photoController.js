import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { Photo } from '../models/Photo.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const getAllPhotos = async (req, res) => {
    const page = req.query.page || 1;
    const photosPerPage = 3;
    const totalPhotos = await Photo.find().countDocuments();

    const photos = await Photo.find({})
        .sort("-dateCreated")
        .skip((page - 1) * photosPerPage)
        .limit(photosPerPage)
    res.render("index", {
        photos: photos,
        current: page,
        pages: Math.ceil(totalPhotos / photosPerPage)
    });
}

const getPhoto = async (req, res) => {
    const photo = await Photo.findById(req.params.id)
    res.render("photo", {
        photo
    })
}

const createPhoto = async (req, res) => {
    const uploadDir = "public/uploads";
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir)
    }
    let uploadedImage = req.files.image;
    let uploadPath = __dirname + "/../public/uploads/" + uploadedImage.name;

    uploadedImage.mv(uploadPath, async () => {
        await Photo.create({
            ...req.body,
            image: "/uploads/" + uploadedImage.name
        })
        res.redirect("/")
    })
}

const updatePhoto = async (req, res) => {
    const photo = await Photo.findById(req.params.id)
    photo.title = req.body.title;
    photo.description = req.body.detail;
    await photo.save();
    res.redirect(`/post/${req.params.id}`)
}

const deletePhoto = async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id });
    let deletedImage = __dirname + "/../public" + photo.image
    fs.unlinkSync(deletedImage)
    await Photo.findByIdAndRemove(req.params.id)
    res.redirect(`/`)
}


export { getAllPhotos, getPhoto, createPhoto, updatePhoto, deletePhoto }