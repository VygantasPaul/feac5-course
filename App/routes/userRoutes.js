const express = require('express');
const { registracija, prisijungimas } = require('../controllers/userController');
const router = express.Router();

router.post('/registracija', registracija);
router.post('/prisijungimas', prisijungimas);

module.exports = router;
