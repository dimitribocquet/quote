const express = require('express');
const router = express.Router();

const dashboardStatsController = require('../controllers/dashboardStats');

/* GET users. */
router.get('/dashboard/stats', dashboardStatsController);

module.exports = router;
