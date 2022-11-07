import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Index Page')
})
app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})
app.get('/contact', (req, res) => {
    res.status(200).send('Contact Page')
})

app.get('*', (req, res) => {
    res.status(404).send('Page Not Found')
})
app.listen(3000,()=>{
    console.log("Server is up, port:3000");
})