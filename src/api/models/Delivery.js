const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  clientName:     { type: String, required: true },
  originCep:      { type: String, required: true },
  destinationCep: { type: String, required: true },
  weightKg:       { type: Number, required: true },
  distanceKm:     { type: Number, required: true },
  durationMin:    { type: Number, required: true },
  price: {
    byWeight:   { type: Number, required: true },
    byDistance: { type: Number, required: true },
    byTime:     { type: Number, required: true },
    total:      { type: Number, required: true }
  },
  status: {
    type: String,
    enum: ['scheduled', 'in_progress', 'completed'],
    default: 'scheduled'
  },
  requestedAt: { type: Date, default: Date.now },
  startedAt:   { type: Date },
  completedAt: { type: Date }
});

module.exports = mongoose.model('Delivery', DeliverySchema);