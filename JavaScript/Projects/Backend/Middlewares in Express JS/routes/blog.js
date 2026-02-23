const express = require('express');
const router = express.Router();

let now = new Date();

router.use((req, res, next) => {
    console.log('Date - ', now.getDate());
    next();
}
)

router.get('/', (req, res) => {
    res.send("Home Page - Birds");
}
).get('/about', (req, res) => {
    res.send("About Birds");
}
)

module.exports = router;