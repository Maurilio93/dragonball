import { Button } from "../globali/Button";
import { SecondButton } from "../globali/SecondButton";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export function User() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        navigate("/");
    };

    return (
        <div
            className="relative min-h-screen bg-cover bg-center w-full flex flex-col justify-between"
            style={{
                backgroundImage: `url('src/images/84066.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex items-center gap-4 justify-between py-3 pr-3 pl-3">
                <Link to="/dashboard">
                    <Button type="button" text="Back👈" className="px-4 py-2 bg-blue-500 text-white rounded-md" />
                </Link>
                <SecondButton type="button" onClick={handleLogout} text="Logout" className="px-4 py-2 bg-blue-500 text-white rounded-md" />
            </div>

            <div className="flex flex-1 flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-bold text-white mb-4">PERSONAGGIO PREFERITO</h2>
                <img
                    src="/src/images/d6btlt6-a951a419-5216-40c2-9a56-c7c0bec2513e.png"
                    alt="Personaggio Preferito"
                    className="w-64 h-auto"
                />
            </div>
        </div>
    );
}
