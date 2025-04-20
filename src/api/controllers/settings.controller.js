const TariffSettings = require('../models/TariffSettings');

// GET /settings
exports.getSettings = async (req, res, next) => {
  try {
    let settings = await TariffSettings.findOne().lean();
    if (!settings) {
      // seed default if missing
      settings = await new TariffSettings({
        weightBands: [
          { maxKg: 1, price: 3 },
          { maxKg: 3, price: 5 },
          { maxKg: 8, price: 9 },
          { maxKg: 12, price: 12 }
        ],
        pricePerKm: 0.5,
        pricePerMin: 0.3
      }).save();
    }
    res.json(settings);
  } catch (err) {
    next(err);
  }
};

// PUT /settings
exports.updateSettings = async (req, res, next) => {
    try {
      const { weightBands, pricePerKm, pricePerMin } = req.body;
      const settings = await TariffSettings.findOneAndUpdate({}, { weightBands, pricePerKm, pricePerMin }, { new: true, upsert: true });
      res.json(settings);
    } catch (err) {
      next(err);
    }
};