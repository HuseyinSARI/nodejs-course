// const getData = (data) => {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching data...");
//         if (data) {
//             resolve("Data Received");
//         } else {
//             reject("Data fetching failed!")
//         }
//     })
// }

// const processData = (receivedData) => {
//     return new Promise((resolve, reject) => {
//         console.log("Data processing...");

//         if (receivedData) {
//             resolve("Data processed")
//         } else {
//             reject("Data processing failed!")
//         }
//     })
// }

// getData(true)
//     .then(result => {
//         console.log(result)
//         return processData(false)
//     }).then(result => {
//         console.log(result)
//     }).catch(error => {
//         console.log(error)
//     })

// ------------------------------------------------------------------
//  Async - Await 

// const handleData = async () => {
//     try {
//         const received = await getData(true);
//         console.log(received);
//         const processed = await processData(false);
//         console.log(processed);
//     } catch (error) {
//         console.log(error);
//     }
// }

// handleData();

// ------------------------------------------------------------------

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

const showBooks = async () => {
    try {
        await addBook({ name: "book4", author: "author4" })
        listBooks();
    } catch (error) {
        console.log(error);
    }
}

showBooks();

