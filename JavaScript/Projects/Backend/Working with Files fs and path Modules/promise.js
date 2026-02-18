import fs from "fs/promises";

let a = await fs.readFile("Example2.txt");

let b = await fs.appendFile("Example2.txt", "appended\n\n\nappended\n\n")

console.log(a.toString(), b);
// console.log(b);