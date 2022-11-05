// const promise1 = new Promise((resolve, reject) => {
//     resolve("data received");
//     // reject("connection error");
// })

// promise1
//     .then(value => console.log(value))
//     .catch(error => console.log(error))

// -----------------------------------------------------------------------

const books = [
    { name: "book1", author: "author1" },
    { name: "book2", author: "author2" },
    { name: "book3", author: "author3" },
]
const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
}
const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books)
        // reject("Some errors");
    })

    return promise1;
}

addBook({ name: "book4", author: "author4" })
    .then(() => {
        console.log("New List");
        listBooks();
    }).catch((error) => {
        console.log("Error:", error);
    })
