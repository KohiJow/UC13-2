const express = require('express');
const SpotsController = require('../controllers/Spots.controller');
const router = express.Router();

router.post('/', SpotsController.store);

module.exports = router;