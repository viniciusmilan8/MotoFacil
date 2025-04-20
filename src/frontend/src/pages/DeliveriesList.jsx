import { useEffect, useState } from 'react';
import { getDeliveries } from '../api/delivery';

export default function DeliveriesList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getDeliveries().then(resp => setList(resp.data)).catch(console.error);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'pendente': return 'bg-yellow-500/20 text-yellow-400';
      case 'em trânsito': return 'bg-blue-500/20 text-blue-400';
      case 'entregue': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  if (!list.length) return (
    <div className="p-6 text-gray-400 text-center">
      Nenhuma entrega cadastrada.
    </div>
  );

  return (
    <div className="rounded-lg border border-gray-700/50 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800/80 border-b border-gray-700/50">
            <tr>
              {['Cliente', 'Origem', 'Destino', 'Peso', 'Total', 'Status', 'Data'].map((header) => (
                <th 
                  key={header}
                  className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            {list.map(d => (
              <tr 
                key={d._id}
                className="hover:bg-gray-800/40 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-200">{d.clientName}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{d.originCep}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{d.destinationCep}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{d.weightKg} kg</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-200">
                  R$ {d.price.total.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <span className={`${getStatusColor(d.status)} inline-flex px-3 py-1 rounded-full text-xs font-medium`}>
                    {d.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">
                  {new Date(d.requestedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}