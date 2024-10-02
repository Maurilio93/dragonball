import { Link } from 'react-router-dom';
import { Button } from '../globali/Button';
import { useEffect, useState } from 'react';

export function Home() {
  const [characters, setCharacters] = useState([]); // Stato per memorizzare la lista di personaggi
  const [searchTerm, setSearchTerm] = useState(''); // Stato per la barra di ricerca
  const [loading, setLoading] = useState(false); // Stato per gestire il caricamento

  // Funzione per fare la chiamata API e ottenere tutti i personaggi
  const fetchCharacters = async (query = '') => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://dragonball-api.com/api/characters?limit=58'
      ); // Usa l'endpoint dell'API di Dragon Ball con un limite maggiore
      const data = await response.json();

      let filteredCharacters = data.items; // Accedi all'array 'items' per ottenere i personaggi

      // Filtro i personaggi in base al termine di ricerca
      if (query) {
        filteredCharacters = filteredCharacters.filter((character) =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
      }

      setCharacters(filteredCharacters); // Aggiorna lo stato con i dettagli dei personaggi
      setLoading(false);
    } catch (error) {
      console.error('Errore durante il caricamento dei dati:', error);
      setLoading(false);
    }
  };

  // Esegui la chiamata API al montaggio del componente
  useEffect(() => {
    fetchCharacters();
  }, []); // [] assicura che la chiamata venga fatta solo una volta

  // Funzione per gestire la ricerca
  const handleSearch = (event) => {
    event.preventDefault();
    fetchCharacters(searchTerm); // Cerca personaggi in base al termine di ricerca
  };

  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG Path */}
                </svg>
              </a>
            </div>
            {/* Logo allineato a destra */}
            <div className="ml-auto">
              <img
                src="src/images/logo_title.png"
                alt="Dragon Ball Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Menu centrato */}
            <nav aria-label="Global" className="flex-1 flex justify-center">
              <ul className="flex items-center gap-6 text-lg">
                {['Saiyan', 'Universi', 'Contatti'].map((item) => (
                  <li key={item} className="list-none">
                    <a
                      className="font-bold px-5 py-2.5 text-black hover:text-black"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Pulsanti Login/Registrati e Logo a destra */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link to="/login">
                  <Button type="button" text="Login" />
                </Link>

                <div className="hidden sm:flex">
                  <Link to="/signup">
                    <Button type="button" text="Registrati" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-8">
        {/* Campo di ricerca al centro */}
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center mt-8"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cerca personaggi..."
            className="px-3 py-2 border rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-teal-700"
          >
            Cerca
          </button>
        </form>

        {/* Mostra i personaggi in una griglia */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-8">
          {loading ? (
            <p>Caricamento dei personaggi in corso...</p>
          ) : characters.length > 0 ? (
            characters.map((character, index) => (
              <div
                key={index}
                className="card border rounded-lg shadow-md flex flex-col items-center p-2 bg-white"
              >
                <div className="w-full h-56 flex justify-center items-center mb-4">
                  <img
                    className="object-contain h-full w-full"
                    src={character.image}
                    alt={character.name}
                  />
                </div>
                <h2 className="text-md font-semibold text-center">
                  {character.name}
                </h2>
              </div>
            ))
          ) : (
            <p>Nessun personaggio trovato</p>
          )}
        </div>
      </main>
    </div>
  );
}
