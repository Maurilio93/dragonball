import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SecondButton } from '../globali/SecondButton';
import { Button } from '../globali/Button';

const PlanetsPage = () => {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchPlanets = async () => {
        try {
            setLoading(true); // Imposta lo stato di caricamento su true
            const response = await fetch('https://dragonball-api.com/api/planets?limit=20');
            const data = await response.json();

            if (response.ok) {
                setPlanets(data.items); // Aggiorna lo stato con i dettagli dei pianeti
            } else {
                setError('Errore durante il caricamento dei pianeti');
            }

            setLoading(false); // Imposta lo stato di caricamento su false
        } catch (error) {
            console.error('Errore durante il caricamento dei pianeti:', error);
            setError('Errore durante il caricamento dei pianeti');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlanets(); // Chiamata alla funzione quando il componente viene caricato
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        navigate("/");
    };

    return (
        <div>
            <div className="flex items-center gap-4 justify-between">
                <Link to="/dashboard">
                    <Button type="button" text="Back👈" className="px-4 py-2 bg-blue-500 text-white rounded-md" />
                </Link>
                <SecondButton type="button" onClick={handleLogout} text="Logout" className="px-4 py-2 bg-blue-500 text-white rounded-md" />
            </div>
            <h1 className="text-center text-2xl font-bold">Pianeti</h1>
            {loading ? (
                <p className="text-center">Caricamento in corso...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 gap-6 mt-8">
                    {planets.map((planet) => (
                        <div key={planet.id} className="text-center hover:scale-105 transform transition duration-300">
                            {planet.image && (
                                <img
                                    src={planet.image}
                                    alt={`Immagine di ${planet.name}`}
                                    className="w-28 h-28 mx-auto rounded-full object-cover"
                                />
                            )}
                            <h2 className="mt-2 text-lg font-semibold">{planet.name}</h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PlanetsPage;
