var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('Stock API Is Alive!');
});

module.exports = router;