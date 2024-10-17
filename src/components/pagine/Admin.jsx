export function Admin() {
    return (
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-gray-700">ID Utente</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-gray-700">Nome Utente</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-gray-700">Email</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-gray-700">Data di Iscrizione</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-gray-700">Ultimo Accesso</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-gray-700">Ruolo</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-gray-700">Stato</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-gray-700">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {/* Esempio di righe multiple per riempire la pagina */}
          {[...Array(20)].map((_, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300 text-gray-700">00{index + 1}</td>
              <td className="px-4 py-2 border border-gray-300 text-gray-700">User{index + 1}</td>
              <td className="px-4 py-2 border border-gray-300 text-gray-700">user{index + 1}@example.com</td>
              <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-01-{String(index + 10).padStart(2, '0')}</td>
              <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-10-{String(index + 5).padStart(2, '0')}</td>
              <td className="px-4 py-2 border border-gray-300 text-gray-700">Utente</td>
              <td className="px-4 py-2 border border-gray-300 text-gray-700">{index % 2 === 0 ? 'Attivo' : 'Sospeso'}</td>
              <td className="px-4 py-2 border border-gray-300 text-gray-700">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2">Modifica Ruolo</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2">Sospendi</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Vedi Dettagli</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
