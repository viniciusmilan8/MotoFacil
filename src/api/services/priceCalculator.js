const TariffSettings = require('../models/TariffSettings');

async function calculatePrice(weightKg, distanceKm, durationMin) {
  const settings = await TariffSettings.findOne().lean();
  if (!settings) throw new Error('Tariff settings not found');

  // calcula preço por peso
  const band = settings.weightBands.find(b => weightKg <= b.maxKg);
  if (!band) throw new Error('Peso acima do permitido');
  const byWeight   = band.price;

  // calcula distância e tempo
  const byDistance = distanceKm * settings.pricePerKm;
  const byTime     = durationMin * settings.pricePerMin;

  const total = byWeight + byDistance + byTime;
  return { byWeight, byDistance, byTime, total };
}

module.exports = { calculatePrice };