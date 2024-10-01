import { HandleLogin } from '../logica/HandleLogin';
import { Textbox } from '../globali/Textbox';
import { Button } from '../globali/Button';
import { Checkbox } from '../globali/Checkbox';
import { useState } from 'react';

export function SignUp() {
  const { handleChange, formData, showPassword, toggleShowPassword } =
    HandleLogin({
      username: '',
      name: '',
      password: '',
      email: '',
      phone: '',
    });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!acceptTerms) {
      setErrorMessage('Devi accettare i termini e le condizioni.');
      return;
    }

    if (formData.password !== confirmPassword) {
      setErrorMessage('Le password non coincidono');
      return;
    } else {
      setErrorMessage('');
    }

    const requestBody = {
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    try {
      // Chiamata POST con fetch verso MockAPI
      const response = await fetch(
        'https://66fc0e66c3a184a84d15e4f0.mockapi.io/Users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert('Registrazione avvenuta con successo!');
        console.log('Dati della risposta:', data);
      } else {
        const errorData = await response.json();
        setErrorMessage(`Errore: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Errore nella richiesta:', error);
      setErrorMessage('Si è verificato un errore durante la registrazione.');
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
              {/* Campo per l'Username */}
              <Textbox
                type="text"
                name="username"
                value={formData.username}
                placeholder="Username"
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
              />

              {/* Campo per l'Email */}
              <Textbox
                type="email"
                name="email"
                value={formData.email}
                placeholder="Indirizzo Email"
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
              />

              {/* Campo per il Numero di Telefono */}
              <Textbox
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Numero di Telefono"
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
              />

              {/* Campo per la Password */}
              <Textbox
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                placeholder="Inserisci Password"
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
              />

              {/* Campo per la Conferma Password */}
              <Textbox
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Conferma Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
              />
            </div>

            {/* Checkbox per Mostra Password */}
            <div className="flex items-center justify-center gap-2">
              <Checkbox onChange={toggleShowPassword} checked={showPassword} />
              <span>Mostra Password</span>
            </div>

            {/* Messaggio di errore per password non corrispondenti */}
            {errorMessage && (
              <p className="text-red-500 text-center font-semibold">
                {errorMessage}
              </p>
            )}

            {/* Checkbox per i Termini e Condizioni */}
            <div className="flex items-center justify-center gap-2">
              <Checkbox
                checked={acceptTerms} // Stato locale per il controllo della checkbox
                onChange={() => setAcceptTerms(!acceptTerms)} // Inverti il valore quando viene cliccata
              />
              <span className="text-gray-700">
                Accetto i termini e le condizioni
              </span>
            </div>

            {/* Bottone di Registrazione */}
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
