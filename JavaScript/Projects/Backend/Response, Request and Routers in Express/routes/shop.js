const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Shop Homepage");
}
);

router.get('/about', (req, res) => {
  res.send("About Shop");
}
);

router.get('/:slug', (req, res) => {
  res.send("Shop - ", req.params.slug);
}
);

module.exports = router;