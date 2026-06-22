const fs = require("fs"); // fs is a module of js which lets js interact with files and folders
const buildIndex = require("./indexer");
const data = fs.readFileSync("./data/documents.json", "utf-8");

// convert the data read from documents.json into js objects
const documents = JSON.parse(data);

console.log(documents);

const index = buildIndex(documents);
console.log(index);
// console.log(typeof(data));

/* 
Notes for myself:
- JSON is basically a string before parsing
- Parsing a JSON file using JSON.parse() converts the string into js objects and arrays
- typeof(data) -> string
-typeof(documents) -> object
- even though typeof(documents) is object, it also returns true for array check as well
- this happens because the all the objects in the json file are enclosed within []
- This makes documents an array of objects
console.log(Array.isArray(documents));
*/
