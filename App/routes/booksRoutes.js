const express = require('express');
const {
          gautiKnygas,
          pridetiKnyga,
          atnaujintiKnyga,
          istrintiKnyga
      } = require('../controllers/bookController');
const router = express.Router();

// Gauti visas knygas
router.get('/knygos', gautiKnygas);

// Pridėti naują knygą
router.post('/knygos', pridetiKnyga);

// Atnaujinti knygą pagal ID
router.put('/knygos/:id', atnaujintiKnyga);

// Ištrinti knygą pagal ID
router.delete('/knygos/:id', istrintiKnyga);

module.exports = router;
