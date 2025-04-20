// Stub para cálculo de distância e tempo entre CEPs
async function compute(originCep, destinationCep) {
    const o = parseInt(originCep.replace(/\D/g, ''), 10);
    const d = parseInt(destinationCep.replace(/\D/g, ''), 10);
    const rawDistance = Math.abs(d - o) / 1000;
    const distanceKm = parseFloat((rawDistance + 1).toFixed(2));
    const durationMin = Math.ceil((distanceKm / 30) * 60);
    return { distanceKm, durationMin };
  }
  
  module.exports = { compute };