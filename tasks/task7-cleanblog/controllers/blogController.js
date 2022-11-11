import { Blog } from '../models/Blog.js'

const getAllBlogs = async (req, res) => {
    const blog = await Blog.find({})
    res.render("index", {
        blog
    });
}


const getBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.render("post", {
        blog
    });
}

const createBlog = async (req, res) => {
    await Blog.create(req.body)
    res.redirect("/")
}

const updateBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    blog.title = req.body.title;
    blog.detail = req.body.detail;
    await blog.save();
    res.redirect(`/post/${req.params.id}`)
}

const deleteBlog = async (req, res) => {
    await Blog.findByIdAndRemove(req.params.id);
    res.redirect(`/`)
}

export { getAllBlogs, getBlog, createBlog, updateBlog,deleteBlog }