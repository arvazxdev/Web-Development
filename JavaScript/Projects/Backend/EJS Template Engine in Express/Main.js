const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // Database details
    let siteName = "KAJU";
    let SP = "Search Here..."
    res.render("index" ,{siteName, SP});
})

app.get('/blog/:slug', (req, res) => {
    // Database details
    let blogTitle = "KAJU - Why and How?";
    let blogContent = "This is a very good organization."
    res.render("blogspot" ,{blogTitle, blogContent});
})

app.listen(port, () => {
    console.log(`Example app is listenig on port ${port}`);
});