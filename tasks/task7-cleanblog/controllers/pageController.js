import { Blog } from '../models/Blog.js'

const getAboutPage = (req, res) => {
    res.render("about");
}
const getAddPostPage = (req, res) => {
    res.render("add_post");
}

const getEditPage = async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.render("edit", {
        blog
    })
}

export { getAboutPage, getAddPostPage, getEditPage }