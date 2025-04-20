require('dotenv').config();
const mongoose = require('mongoose');
const TariffSettings = require('../models/TariffSettings');

async function seed() {
  const uri = process.env.MONGO_URI;
  await mongoose.connect(uri, { user: process.env.MONGO_USER, pass: process.env.MONGO_PASS });
  const exists = await TariffSettings.findOne();
  if (exists) return console.log('TariffSettings já existentes.');

  await new TariffSettings({
    weightBands: [
      { maxKg: 1, price: 3 },
      { maxKg: 3, price: 5 },
      { maxKg: 8, price: 9 },
      { maxKg: 12, price: 12 }
    ],
    pricePerKm: 0.5,
    pricePerMin: 0.3
  }).save();

  console.log('TariffSettings inicializadas com sucesso.');
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});