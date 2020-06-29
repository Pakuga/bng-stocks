const express = require('express');
const router = express.Router();
const stockController = require('./../controllers/stockController');

router.post('/', stockController.create);
router.get('/', stockController.getAll);


module.exports = router;
