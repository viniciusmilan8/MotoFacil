import { useEffect, useState } from 'react';
import { fetchSettings, updateSettings } from '../api/settings';

export default function Settings() {
  const [bands, setBands] = useState([{ maxKg: '', price: '' }]);
  const [pricePerKm, setPricePerKm] = useState('');
  const [pricePerMin, setPricePerMin] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetchSettings()
      .then(res => {
        const s = res.data;
        setBands(s.weightBands);
        setPricePerKm(s.pricePerKm);
        setPricePerMin(s.pricePerMin);
      })
      .catch(console.error);
  }, []);

  const handleBandChange = (i, field, val) => {
    const updated = bands.slice();
    updated[i][field] = val;
    setBands(updated);
  };

  const addBand = () => setBands(b => [...b, { maxKg: '', price: '' }]);
  const removeBand = i => setBands(b => b.filter((_, idx) => idx !== i));

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await updateSettings({
        weightBands: bands.map(b => ({ maxKg: Number(b.maxKg), price: Number(b.price) })),
        pricePerKm: Number(pricePerKm),
        pricePerMin: Number(pricePerMin)
      });
      setMsg('Configurações atualizadas!');
    } catch {
      setMsg('Erro ao atualizar.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Configurações de Frete</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium">Faixas de Peso</label>
          {bands.map((b, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                type="number" placeholder="Max Kg"
                value={b.maxKg}
                onChange={e => handleBandChange(i, 'maxKg', e.target.value)}
                className="w-24 px-2 border rounded"
              />
              <input
                type="number" placeholder="Preço"
                value={b.price}
                onChange={e => handleBandChange(i, 'price', e.target.value)}
                className="w-24 px-2 border rounded"
              />
              <button 
                type="button" 
                onClick={() => removeBand(i)}
                className="
                  text-red-600 
                  hover:text-red-800 
                  w-5 h-5 
                  flex 
                  items-center 
                  justify-center 
                  text-xs
                  transform 
                  hover:scale-110 
                  transition-transform
                "
              >
                ✕
              </button>
            </div>
          ))}
          <button type="button" onClick={addBand}
                  className="text-blue-600 hover:underline">+ Adicionar faixa</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Preço por Km</label>
            <input type="number" step="0.01"
                   value={pricePerKm}
                   onChange={e => setPricePerKm(e.target.value)}
                   className="w-full px-2 py-1 border rounded"/>
          </div>
          <div>
            <label className="font-medium">Preço por Minuto</label>
            <input type="number" step="0.01"
                   value={pricePerMin}
                   onChange={e => setPricePerMin(e.target.value)}
                   className="w-full px-2 py-1 border rounded"/>
          </div>
        </div>

        <button type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded">
          Salvar
        </button>
      </form>
      {msg && <p className="mt-4">{msg}</p>}
    </div>
  );
}