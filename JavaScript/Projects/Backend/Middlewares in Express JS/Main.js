const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");
const blog = require('./routes/blog');
// const filePath = path.join(__dirname, 'public', 'public.txt');

app.use(express.static("public"));
app.use('/blog', blog);

// Middleware 1
app.use((req, res, next) => {
    console.log('M1');
    let now = new Date();
    req.name = "Arvaz";
    fs.appendFileSync('public/public.txt', `You logged in on ${now.getDate()}/${now.getMonth()}/${now.getFullYear()} through ${req.method}.\n`)
    next();
}
)

// Middleware 2
app.use((req, res, next) => {
    console.log('M2');
    req.name = 'a programmer';
    // res.send('End')
    next();
}
)

// Route Handler
app.get('/', (req, res) => {
    res.send('Nothing to show!');
}).get('/about', (req, res) => {
    res.send(`I am ${req.name}`);
}).get('/contact%20us', (req, res) => {
    res.send("Contanct us on - Mob. no. not found!");
})


app.listen(() => {
  console.log("I am showing in console");
}

)
app.listen(port, () => {
    console.log(`Example app is listenig on port ${port}`);
})
