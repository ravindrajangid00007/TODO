const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

router.post('/create', userController.create);
router.get('/delete-contact/:id' , userController.delete);
module.exports = router