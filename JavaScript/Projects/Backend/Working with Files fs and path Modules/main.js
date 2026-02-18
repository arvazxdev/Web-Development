const fs = require('fs');

// console.log(fs);

console.log("Started!")

fs.writeFileSync("Example.txt", "This is an example of edited text written through javascript");

fs.writeFile("Example2.txt", "This is an example of edited text written through javascript 2", () => {
    console.log("second");
    fs.readFile("Example2.txt", (error, data) => {
        console.log(`The error is ${error} \n${data}`);
    }
    )
}
);

fs.appendFile("ap.txt", "again ", (e, d) => {
    console.log(d);
}
)

console.log("Done!");