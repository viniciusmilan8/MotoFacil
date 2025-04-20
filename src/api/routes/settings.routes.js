const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const settingsCtrl = require('../controllers/settings.controller');

router.get('/', settingsCtrl.getSettings);

router.put('/',
  body('weightBands').isArray({ min: 1 }),
  body('weightBands.*.maxKg').isNumeric(),
  body('weightBands.*.price').isNumeric(),
  body('pricePerKm').isNumeric(),
  body('pricePerMin').isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    return settingsCtrl.updateSettings(req, res, next);
  }
);

module.exports = router;