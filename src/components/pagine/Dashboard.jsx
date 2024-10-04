import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { SecondButton} from "../globali/SecondButton"; // Corretto l'import
import {Button} from "../globali/Button";

export function Dashboard() {
  const user = JSON.parse(localStorage.getItem("userInfo")); // Ottieni userInfo dall'oggetto
  const navigate = useNavigate(); // Inizializza navigate

  // Funzione di logout
  const handleLogout = () => {
    localStorage.removeItem("userInfo"); // Rimuovi userInfo da localStorage
    navigate("/"); // Naviga verso la home page
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-white">
      {/* Pulsante Logout sempre in alto a destra */}
      <div className="absolute top-4 right-4">
        <SecondButton
          onClick={handleLogout}
          type="button"
          text="Logout"
        />
      </div>

      {/* Pulsante Home sopra il contenuto principale */}
      <div className="absolute top-4 left-4">
        <Button
          onClick={() => navigate('/')}  // Naviga alla home page
          type="button"
          text="Home"
        />
      </div>

      {/* Contenuto principale */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center mt-20">
        <img
          alt="Dragon Ball Logo"
          src="src/images/logo_title.png"
          className="mx-auto w-48 mb-8"
        />

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Benvenuto, {user?.username}
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Esplora il mondo di Dragon Ball e gestisci i tuoi personaggi preferiti!
        </p>

        {/* Foto con bordo */}
        <img
          alt="Dragon Ball Heroes"
          src="src/images/Image-1 (1).jpg"
          className="mx-auto w-48 h-auto rounded-lg border-4 border-gray-300 mb-4"
        />

        <p className="text-pretty text-sm text-gray-500 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
          maiores deleniti consectetur nobis et eaque.
        </p>
      </div>
    </div>
  );
}
