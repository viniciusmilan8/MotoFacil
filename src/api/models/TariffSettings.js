const mongoose = require('mongoose');

const TariffSettingsSchema = new mongoose.Schema({
  weightBands: [{
    maxKg: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  pricePerKm: { type: Number, required: true, default: 0.5 },
  pricePerMin:{ type: Number, required: true, default: 0.3 }
});

module.exports = mongoose.model('TariffSettings', TariffSettingsSchema);