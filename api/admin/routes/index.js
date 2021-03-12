const express = require('express');
const router = express.Router();

const dashboardStatsController = require('../controllers/dashboardStats');
const usersRouter = require('../../domains/User/routes/users');

router.get('/dashboard/stats', dashboardStatsController);

/* users. */
router.use('/users', usersRouter);

module.exports = router;
