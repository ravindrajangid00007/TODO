const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home');

router.get('/', homeController.list);
router.use('/users', require("./users"));
module.exports = router;