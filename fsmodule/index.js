import { readFile, writeFile, appendFile, unlink, mkdir, rm } from 'node:fs';

//  READING FILE--------------------------------------------------
// readFile("password.txt", "utf-8", (err, data) => {
//     if (err) console.log(err);

//     console.log(data);
//     console.log("file read success");
// })

//  WRITING FILE--------------------------------------------------

// writeFile("example.txt", "some write examples", "utf8", (err) => {
//     if (err) console.log(err);
//     console.log("file writing success");
// })

//  CHANGING FILE --------------------------------------------------

// appendFile("example.txt", "\n adding new line", "utf8", (err) => {
//     if (err) console.log(err);
//     console.log("add new line");
// })

//  DELETING FILE ------------------------------------------------------

// unlink("example.txt", (err) => {
//     if (err) console.log(err);
//     console.log("file deleted");
// })

// CREATING FOLDER ------------------------------------------------

// mkdir("folders/more-folders",{recursive:true} ,(err) => {
//     if (err) console.log(err);
//     console.log("folders created");
// })

// DELETING FOLDER ------------------------------------------------

// rmd("folders", { recursive: true }, (err) => {
//     if (err) console.log(err);
//     console.log("folders removed");
// })

// ---------------------------------------------------------------------

