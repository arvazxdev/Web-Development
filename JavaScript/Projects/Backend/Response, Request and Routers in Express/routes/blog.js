const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Blog Homepage");
}
);

router.get('/about', (req, res) => {
    res.send("About Blog");
}
);

router.get('/blogspot/:slug', (req, res) => {
    res.send('Blog - ' + req.params.slug);
    document.title = req.params.slug;
}
);

// router.get('/blogpost/:slug', (req, res) => {
//     res.send(`fetch the blogpost for ${req.params.slug}`)
//   })

module.exports = router;