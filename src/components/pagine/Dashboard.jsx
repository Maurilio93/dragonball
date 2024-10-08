import { useNavigate } from "react-router-dom";
import { SecondButton } from "../globali/SecondButton";
import { Button } from "../globali/Button";

export function Dashboard() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");  // Rimuove solo i dati dell'utente
    navigate("/");
  };

  return (

    <div
      className="relative min-h-screen bg-cover bg-center w-full"
      style={{
        backgroundImage: `url('src/images/9794.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <nav aria-label="Global" className="flex-1 flex justify-center">
        <ul className="flex items-center gap-6 text-lg">
        </ul>
      </nav>
      {/* Pulsante Logout sempre in alto a destra */}
      <div className="absolute top-4 right-4">
        <SecondButton
          onClick={handleLogout}
          type="button"
          text="Logout"
        />
      </div>

      {/* Pulsante Home */}
      <div className="absolute top-4 left-4">
        <Button
          onClick={() => navigate('/')}
          type="button"
          text="Home"
        />
      </div>

      {/* Titolo e Benvenuto */}
      <div className="flex flex-col items-center mt-16 p-4 text-white max-w-lg mx-auto">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg w-full text-center">
          <img
            alt="Dragon Ball Logo"
            src="src/images/logo_title.png"
            className="w-48 mb-4 mx-auto"
          />
          <h1 className="text-4xl font-bold mb-2">
            Benvenuto, {user?.username}
          </h1>
          <p className="text-xl mb-4">
            Esplora il mondo di Dragon Ball!
          </p>
        </div>
      </div>

      {/* Info Utente */}
      <div className="flex justify-center mt-8">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">Info Utente</h2>
          <p className="text-gray-700"><strong>Nome:</strong> {user?.username}</p>
          <p className="text-gray-700"><strong>Email:</strong> {user?.email}</p>
          <p className="text-gray-700"><strong>Password:</strong> {'•'.repeat(8)}</p>
          {/* Il pulsante per modificare la password */}
          <div className="m-3">
            <Button
              onClick={() => navigate('/modificapassword')}
              text="Modifica Password"
              type="button"
            />
          </div>
        </div>
      </div>


      {/* Griglia delle Sezioni */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-16 max-w-6xl mx-auto mt-10">

        {/* Sezione Personaggi */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Personaggi</h2>
          <p className="mb-4">Esplora la galleria dei personaggi con schede dettagliate.</p>
          <Button onClick={() => navigate('/')} text="Vai ai Personaggi" />
        </div>

        {/* Sezione Timeline degli Eventi */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Timeline degli Eventi</h2>
          <p className="mb-4">Ripercorri la storia della serie con una timeline interattiva.</p>
          <Button onClick={() => navigate('/timeline')} text="Vai alla Timeline" />
        </div>

        {/* Enciclopedia delle Tecniche */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Enciclopedia delle Tecniche</h2>
          <p className="mb-4">Scopri le tecniche principali dei personaggi della serie.</p>
          <Button onClick={() => navigate('/techniques')} text="Esplora le Tecniche" />
        </div>

        {/* Sezione Episodi e Film */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Episodi e Film</h2>
          <p className="mb-4">Trova descrizioni e dettagli sugli episodi e i film di Dragon Ball.</p>
          <Button onClick={() => navigate('/episodes')} text="Guarda Episodi e Film" />
        </div>

        {/* Area Fan Zone */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Fan Zone</h2>
          <p className="mb-4">Partecipa alla community, carica le tue fan art e completa i quiz!</p>
          <Button onClick={() => navigate('/fan-zone')} text="Entra nella Fan Zone" />
        </div>

        {/* Sezione News e Aggiornamenti */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">News e Aggiornamenti</h2>
          <p className="mb-4">Resta aggiornato sulle ultime novità e scopri teorie e rumors sulla serie.</p>
          <Button onClick={() => navigate('/news')} text="Leggi le News" />
        </div>
      </div>
    </div>
  );
}
