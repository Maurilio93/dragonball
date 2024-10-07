import { Link } from 'react-router-dom';
import { Button } from '../globali/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SecondButton } from '../globali/SecondButton';

export function Home() {
  const [characters, setCharacters] = useState([]); // Stato per memorizzare la lista di personaggi
  const [searchTerm, setSearchTerm] = useState(''); // Stato per la barra di ricerca
  const [loading, setLoading] = useState(false); // Stato per gestire il caricamento
  const user = JSON.parse(localStorage.getItem("userInfo")); // Verifica se l'utente è loggato
  const navigate = useNavigate();

  // Funzione per fare la chiamata API e ottenere tutti i personaggi
  const fetchCharacters = async (query = '') => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://dragonball-api.com/api/characters?limit=58'
      );
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
  }, []);

  // Funzione per gestire la ricerca
  const handleSearch = (event) => {
    event.preventDefault();
    fetchCharacters(searchTerm); // Cerca personaggi in base al termine di ricerca
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div>
      <header className="bg-gray-300">
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
                </svg>
              </a>
            </div>
            <div className="ml-auto">
              <img
                src="src/images/logo_title.png"
                alt="Dragon Ball Logo"
                className="h-10 w-auto"
              />
            </div>
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

            {/* Pulsante Benvenuto */}
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Link to="/dashboard">
                    <Button type="button" text={`Back👈`} className="px-4 py-2 bg-blue-500 text-white rounded-md" />
                  </Link>
                  <SecondButton type="button" onClick={handleLogout} text="Logout" className="px-4 py-2 bg-blue-500 text-white rounded-md" />
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <Link to="/login">
                    <Button type="button" text="Login" />
                  </Link>
                  <Link to="/signup">
                    <Button type="button" text="Registrati" />
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      <main className="px-4 py-8 bg-white">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center mt-8"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cerca personaggi..."
            className="px-5 py-3 mx-2 border rounded-lg focus:outline-none"
          />
          <Button type="submit" text="Cerca" />
        </form>

        {/* Mostra i personaggi in una griglia */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-8">
          {loading ? (
            <p>Caricamento dei personaggi in corso...</p>
          ) : characters.length > 0 ? (
            characters.map((character, index) => (
              <div
                key={index}
                className="card border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500 flex flex-col items-center p-2 bg-white"
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
