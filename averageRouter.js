
const express = require('express');
const router = express.Router();
const { calculateAvg } = require('../controllers/averageController');

// Endpoint to calculate average based on number id
router.post('/:number_id', calculateAvg);

module.exports = router;
