//import { readFile, writeFile, appendFile, unlink, mkdir, rm } from 'node:fs';

////!------------------------------------------------------------------------
////! Yanlış ---- Yanlış ---- Yanlış ---- Yanlış ---- Yanlış ---- Yanlış ----
////! ------------------------------------------------------------------------

// appendFile("employees.json", '{"name": "HSYN", "salary": 1000}', "utf8", (err) => {
//     console.log("file creating...");
//     if (err) return console.log(err);
//     console.log("file created");
// })

// readFile("employees.json", "utf-8", (err, data) => {
//     console.log("file reading...");
//     if (err) return console.log(err);
//     console.log("data :", data);
// })

// writeFile("employees.json", '{"name": "HSYN", "salary": 5000}', "utf8", (err) => {
//     console.log("file updating...");
//     if (err) return console.log(err);
//     console.log("update success");
// })
    
// readFile("employees.json", "utf-8", (err, data) => {
//     console.log("file reading...");
//     if (err) return console.log(err);
//     console.log("data :", data);
// })

// unlink("employees.json", (err) => {
//     console.log("file deleting...");
//     if (err) return console.log(err);
//     console.log("file deleted");
// })

//---------------------------------
//  1.yöntem      Callback ile
//---------------------------------

// appendFile("employees.json", '{"name": "HSYN", "salary": 1000}', "utf8", (err) => {
//     console.log("file creating...");
//     if (err) return console.log(err);
//     console.log("file created");

//     readFile("employees.json", "utf-8", (err, data) => {
//         console.log("file reading...");
//         if (err) return console.log(err);
//         console.log("data :", data);

//         writeFile("employees.json", '{"name": "HSYN", "salary": 5000}', "utf8", (err) => {
//             console.log("file updating...");
//             if (err) return console.log(err);
//             console.log("update success");

//             readFile("employees.json", "utf-8", (err, data) => {
//                 console.log("file reading...");
//                 if (err) return console.log(err);
//                 console.log("data :", data);

//                 unlink("employees.json", (err) => {
//                     console.log("file deleting...");
//                     if (err) return console.log(err);
//                     console.log("file deleted");
//                 })
//             })
//         })
//     })
// })

//----------------------------------------
//  2.yöntem      Senkron fonksiyonlar ile 
//----------------------------------------


import { readFileSync, writeFileSync, appendFileSync, unlinkSync } from 'node:fs';

try {
    console.log("file creating...");
    appendFileSync("employees.json", '{"name": "HSYN", "salary": 1000}', "utf8")
    console.log("file created");
    
    console.log("file reading...");
    let data = readFileSync("employees.json", "utf-8")
    console.log("data :", data);
    
    console.log("file updating...");
    writeFileSync("employees.json", '{"name": "HSYN", "salary": 5000}', "utf8")
    data = readFileSync("employees.json", "utf-8")
    console.log("update success, data:", data);

    console.log("file deleting...");
    unlinkSync("employees.json")
    console.log("file deleted");

} catch (error) {
    console.log(error);
}



