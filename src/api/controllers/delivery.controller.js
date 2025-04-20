const Delivery = require('../models/Delivery');
const { calculatePrice } = require('../services/priceCalculator');
const mockGeo = require('../services/geo.service'); // stub para distância/tempo

exports.createDelivery = async (req, res, next) => {
  try {
    const { clientName, originCep, destinationCep, weightKg } = req.body;

    // mockGeo retorna { distanceKm, durationMin }
    const { distanceKm, durationMin } = await mockGeo.compute(originCep, destinationCep);

    const price = await calculatePrice(weightKg, distanceKm, durationMin);
    const delivery = await Delivery.create({
      clientName,
      originCep,
      destinationCep,
      weightKg,
      distanceKm,
      durationMin,
      price
    });
    res.status(201).json(delivery);
  } catch (err) {
    next(err);
  }
};

exports.getAllDeliveries = async (req, res, next) => {
  try {
    const list = await Delivery.find().sort({ requestedAt: -1 });
    res.json(list);
  } catch (err) {
    next(err);
  }
};