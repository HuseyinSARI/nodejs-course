let posts = [
    {
        id: "id01",
        content: "Some contents",
        author: "Peter Pan"
    },
    {
        id: "id02",
        content: "Some contents",
        author: "Captain Hook"
    },
]

const showPosts = (posts) => {
    return new Promise((resolve, reject) => {
        console.log("Showing posts...")
        if (posts) {
            resolve(posts)
        } else {
            reject("Cannot show posts!")
        }
    })
}

const addNewPost = (post) => {
    return new Promise((resolve, reject) => {
        console.log("Adding new post...");
        const isAdded = posts.push(post);
        if (isAdded) {
            resolve("New post added.")
        } else {
            reject("Error during adding new post!")
        }
    })
}

const handlePost = async () => {
    try {
        const newPost = { id: "id03", content: "Awesome contents", author: "Missing" }

        const result = await showPosts(posts);
        console.log(result);

        const result2 = await addNewPost(newPost)
        console.log(result2);

        const result3 = await showPosts(posts);
        console.log(result3);


    } catch (error) {
        console.log(error);
    }
}

handlePost();