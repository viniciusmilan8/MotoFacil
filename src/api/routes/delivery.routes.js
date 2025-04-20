const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const deliveryCtrl = require('../controllers/delivery.controller');

// cadastrar nova entrega
router.post('/',
  body('clientName').notEmpty(),
  body('originCep').notEmpty(),
  body('destinationCep').notEmpty(),
  body('weightKg').isNumeric(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    return deliveryCtrl.createDelivery(req, res, next);
  }
);

// listar entregas
router.get('/', deliveryCtrl.getAllDeliveries);

module.exports = router;