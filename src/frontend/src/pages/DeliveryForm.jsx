import { useState } from 'react';
import { createDelivery } from '../api/delivery';

export default function DeliveryForm() {
  const [form, setForm] = useState({ clientName:'', originCep:'', destinationCep:'', weightKg:'' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await createDelivery({ 
        clientName: form.clientName, 
        originCep: form.originCep,
        destinationCep: form.destinationCep,
        weightKg: parseFloat(form.weightKg)
      });
      setMessage(`Entrega criada! Total: R$ ${data.price.total.toFixed(2)}`);
      setForm({ clientName:'', originCep:'', destinationCep:'', weightKg:'' });
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setMessage('Erro ao criar entrega');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Nova Entrega</h2>
        
        <div className="space-y-4">
          <div>
            <input 
              name="clientName" 
              value={form.clientName} 
              onChange={handleChange} 
              placeholder="Nome do cliente" 
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <input 
              name="originCep"   
              value={form.originCep}   
              onChange={handleChange} 
              placeholder="CEP origem" 
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <input 
              name="destinationCep" 
              value={form.destinationCep} 
              onChange={handleChange} 
              placeholder="CEP destino" 
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <input 
              name="weightKg"    
              type="number" 
              value={form.weightKg} 
              onChange={handleChange} 
              placeholder="Peso (Kg)" 
              step="0.1" 
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Criar Entrega
          </button>
        </div>
        
        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}