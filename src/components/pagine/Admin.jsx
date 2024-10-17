import { Button } from "../globali/Button";
import { Link } from "react-router-dom";

export function Admin() {
    return (
        <div>
            <div className="pl-3 py-3">
                <Link to="/dashboard">
                    <Button type="button" text={`Back👈`} className="px-4 py-2 bg-blue-500 text-white rounded-md" />
                </Link>
            </div>
            <h1 className="flex flex-col justify-center items-center font-bold text-3xl py-3">LISTA UTENTI</h1>
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
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">001</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">User1</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">user1@example.com</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-01-10</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-10-05</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">Utente</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">
                            <button className="bg-green-500 text-white px-2 py-1 rounded">Attivo</button>
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">
                            <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2">Sospendi</button>
                            <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-800">Vedi Dettagli</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">002</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">User2</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">user2@example.com</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-01-11</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-10-06</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">Utente</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">
                            <button className="bg-red-500 text-white px-2 py-1 rounded">Non Attivo</button>
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">
                            <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2">Sospendi</button>
                            <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-800">Vedi Dettagli</button>
                        </td>
                    </tr>
                    {/* Aggiungi altre righe simili per completare le 15 totali */}
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">003</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">User3</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">user3@example.com</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-01-12</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-10-07</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">Utente</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">
                            <button className="bg-green-500 text-white px-2 py-1 rounded">Attivo</button>
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">
                            <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2">Sospendi</button>
                            <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-800">Vedi Dettagli</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">004</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">User4</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">user4@example.com</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-01-13</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-10-08</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">Utente</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">
                            <button className="bg-red-500 text-white px-2 py-1 rounded">Non Attivo</button>
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">
                            <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2">Sospendi</button>
                            <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-800">Vedi Dettagli</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">005</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">User5</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">user5@example.com</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-01-14</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">2024-10-09</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">Utente</td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">
                            <button className="bg-green-500 text-white px-2 py-1 rounded">Attivo</button>
                        </td>
                        <td className="px-4 py-2 border border-gray-300 text-gray-700">
                            <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2">Sospendi</button>
                            <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-800">Vedi Dettagli</button>
                        </td>
                    </tr>
                    {/* Continua con altre righe fino a 15 totali, alternando tra "Attivo" e "Non Attivo" */}
                </tbody>
            </table>
        </div >
    );
}
