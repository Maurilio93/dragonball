import { HandleLogin } from '../logica/HandleLogin';
import { Textbox } from '../globali/Textbox';
import { Button } from '../globali/Button';
import { Checkbox } from '../globali/Checkbox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export function SignUp() {
  const { handleChange, formData, showPassword, toggleShowPassword } =
    HandleLogin({
      username: '',
      password: '',
      email: '',
      phone: '',
    });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!acceptTerms) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Devi accettare i termini e le condizioni.',
      });
      return;
    }

    if (formData.password.length < 8) {
      Swal.fire({
        icon: 'warning',
        title: 'Password Troppo Breve',
        text: 'La password deve essere lunga almeno 8 caratteri.',
      });
      return;
    }

    if (formData.password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Le password non coincidono',
      });
      return;
    }
    try {
      const url = 'http://localhost:3000/signup';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log('Risposta del server:', data);
          Swal.fire({
            title: 'Registrazione avvenuta con successo!',
            icon: 'success',
          });
          navigate('/login');
        } else {
          console.error("La risposta non è in formato JSON");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Il server ha risposto con un formato inaspettato.',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Errore durante la registrazione. Riprova.',
        });
      }
    } catch (error) {
      console.error('Errore nella richiesta:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Si è verificato un errore durante la registrazione.',
      });
    }
  };
  return (
    <section className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">Registrati Subito!</h1>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="flex flex-col space-y-4">
              <Textbox
                type="text"
                name="username"
                value={formData.username}
                placeholder="Username"
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
              />

              <Textbox
                type="email"
                name="email"
                value={formData.email}
                placeholder="Indirizzo Email"
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
              />

              <Textbox
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Numero di Telefono"
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
              />

              <Textbox
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                placeholder="Inserisci Password"
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
              />

              <Textbox
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Conferma Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
              />
            </div>

            <div className="flex items-center justify-center gap-2">
              <Checkbox onChange={toggleShowPassword} checked={showPassword} />
              <span>Mostra Password</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Checkbox
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
              />
              <span className="text-gray-700">
                Accetto i termini e le condizioni
              </span>
            </div>

            <div className="mt-4 flex justify-center">
              <Button
                type="submit"
                text="Registrati"
                className="inline-block rounded-lg bg-green-500 px-5 py-3 text-sm font-medium text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
