import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../globali/Button';
import { Checkbox } from '../globali/Checkbox';
import { HandleLogin } from '../logica/HandleLogin';
import { Textbox } from '../globali/Textbox';
import Swal from 'sweetalert2';

export function Login() {
  const { handleChange, toggleShowPassword, showPassword, formData } = HandleLogin();
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Verifica se i campi sono vuoti
    if (!formData.username || !formData.password) {
      Swal.fire({
        icon: 'warning',
        title: 'Attenzione',
        text: 'Per favore, inserisci sia username che password.',
      });
      return; // Ferma l'esecuzione se uno dei campi è vuoto
    }

    try {
      const url = 'http://localhost:3000/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log('Risposta del server:', user);

        if (user.message === "Success!" && user.apiToken) {
          Swal.fire({
            title: 'Good job!',
            text: 'Login avvenuto con successo',
            icon: 'success',
          }).then(() => {
            localStorage.setItem("userInfo", JSON.stringify(user));
            navigate('/dashboard');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username o password errati. Riprova.',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Utente non trovato. Riprova.',
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
            required
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          />

          <div className="relative">
            <Textbox
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              placeholder="Inserisci password"
              onChange={handleChange}
              required
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <Checkbox onChange={toggleShowPassword} checked={showPassword} />{' '}
            <span>Mostra Password</span>
          </div>

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
