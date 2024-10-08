import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { Textbox } from './Textbox';
import { Checkbox } from './Checkbox';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';

export function ModificaPassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Errore',
                text: 'Le nuove password non corrispondono.',
            });
            return;
        }

        if (newPassword.length < 8) {
            Swal.fire({
                icon: 'warning',
                title: 'Password Troppo Breve',
                text: 'La nuova password deve essere lunga almeno 8 caratteri.',
            });
            return;
        }

        try {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            if (!userInfo || !userInfo.password) {
                Swal.fire({
                    icon: 'error',
                    title: 'Errore',
                    text: 'Utente non trovato o nessuna password salvata.',
                });
                return;
            }

            // Confronta la password corrente con quella crittografata
            const isMatch = await bcrypt.compare(currentPassword, userInfo.password);

            if (isMatch) {
                // Crittografa la nuova password
                const hashedPassword = await bcrypt.hash(newPassword, 10);
                const updatedUserInfo = { ...userInfo, password: hashedPassword };
                localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

                Swal.fire({
                    icon: 'success',
                    title: 'Successo',
                    text: 'Password modificata con successo!',
                });

                navigate('/dashboard');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Errore',
                    text: 'La password corrente non è corretta.',
                });
            }
        } catch (error) {
            console.error('Errore nella modifica della password:', error);
            Swal.fire({
                icon: 'error',
                title: 'Errore',
                text: 'Si è verificato un errore durante la modifica della password.',
            });
        }
    };

    return (
        <section className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="w-full max-w-md px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-black">Modifica la tua Password!</h1>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-lg flex justify-center items-center">
                    <form onSubmit={handlePasswordChange} className="space-y-4">
                        <div className="flex flex-col space-y-4 gap-5">
                            <Textbox
                                type={showPassword ? "text" : "password"}
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Inserisci Password Corrente"
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                required
                            />
                            <Textbox
                                type={showPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Nuova Password"
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                required
                            />
                            <Textbox
                                type={showPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Conferma Nuova Password"
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Checkbox onChange={toggleShowPassword} checked={showPassword} />
                            <span>Mostra Password</span>
                        </div>
                        <div className='flex flex-col justify-center items-center m-4'>
                            <Button type="submit" text="Salva Modifiche" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
