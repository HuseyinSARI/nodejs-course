// console.log("mission 1");
// console.log("mission 2");
// console.log("mission 3");

// ---------------------------------------------

// const func1 = () => {
//     console.log("mission 1");
// }
// const func2 = () => {
//     console.log("mission 2");
// }
// func1();
// func2();

// -----------------------------------------------

// const func1 = () => {
//     console.log("mission 1");
//     func2();
// }
// const func2 = () => {
//     console.log("mission 2");
//     func3();
// }
// const func3 = () => {
//     console.log("mission 3");
// }
// func1()

// -----------------------------------------------

// const func1 = () => {
//     console.log("mission 1");
//     func3();
// }
// const func2 = () => {
//     console.log("mission 2");
// }
// const func3 = () => {
//     console.log("mission 3");
//     func2()
// }
// func1()

// -----------------------------------------------

// let x = 5;
// console.log(x);

// setTimeout(() => {
//     x += 5;
//     console.log(x);
// }, 1000);

// x += 5;
// console.log(x);

// -----------------------------------------------

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
const addBook = (newBook,callback) => {
    books.push(newBook);
    callback();
}

addBook({ name: "book4", author: "author4" },listBooks );

