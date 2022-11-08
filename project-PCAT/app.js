import express from "express";
import colors from "colors";

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const photo = {
        id: 10,
        name: "photo-awesome",
        description: "some awesome photos",
    }

  res.send(photo);
});

app.listen(port, () => {
  console.log(`Server is up port:${port}`.bgGreen.underline.bold);
});
