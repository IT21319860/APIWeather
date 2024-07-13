// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.addUser);
router.put('/users/:email', userController.updateUserLocation);

module.exports = router;
