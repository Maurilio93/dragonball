import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../globali/Button';
import { Checkbox } from '../globali/Checkbox';
import { HandleLogin } from '../logica/HandleLogin';
import { Textbox } from '../globali/Textbox';
import { useState } from 'react';
import Swal from 'sweetalert2';

export function Login() {
  const { handleChange, formData, showPassword, toggleShowPassword } =
    HandleLogin({
      username: '',
      password: '',
    });

  const [errorMessage] = useState('');

  const navigate = useNavigate(); // Inizializza il navigatore per il redirect

  // Funzione di submit per il login
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = 'https://66fc0e66c3a184a84d15e4f0.mockapi.io/Users';
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Errore nel recupero degli utenti');
      }

      const users = await response.json();

      // Verifica se l'utente esiste e la password coincide
      const user = users.find(
        (user) =>
          user.username === formData.username &&
          user.password === formData.password
      );

      if (user) {
        // Login avvenuto con successo
        localStorage.setItem('username', user.username); // Salva username in localStorage
        Swal.fire({
          title: 'Good job!',
          text: 'Login avvenuto con successo',
          icon: 'success',
        });
        navigate('/dashboard'); // Reindirizza alla dashboard
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username o password errati. Riprova.',
        });
      }
    } catch (error) {
      console.error('Errore nella richiesta:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Si è verificato un errore durante il login.',
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-100">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl m-5">Accedi</h1>
      </div>
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <form
          onSubmit={handleFormSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4 flex flex-col gap-5"
        >
          <Textbox
            type="text"
            name="username"
            value={formData.username}
            placeholder="Inserisci username"
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          />

          <div className="relative">
            <Textbox
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              placeholder="Inserisci password"
              onChange={handleChange}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />
          </div>

          <div className="flex justify-center items-center gap-2 font-semibold">
            <Checkbox onChange={toggleShowPassword} checked={showPassword} />{' '}
            <span>Mostra Password</span>
          </div>

          {errorMessage && (
            <p className="text-red-600 text-center">{errorMessage}</p>
          )}

          <Button
            type="submit"
            text="Accedi"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          />
        </form>

        <div className="flex items-center justify-center mt-4">
          <p className="text-sm text-gray-500">
            Non hai un account?{' '}
            <Link to="/signup" className="underline">
              Registrati
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
