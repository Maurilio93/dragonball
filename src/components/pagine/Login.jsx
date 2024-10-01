import { Link } from 'react-router-dom';
import { Button } from '../globali/Button';
import { Checkbox } from '../globali/Checkbox';
import { HandleLogin } from '../logica/HandleLogin';
import { Textbox } from '../globali/Textbox';

export function Login() {
  const {
    handleSubmit,
    handleChange,
    formData,
    showPassword,
    toggleShowPassword,
  } = HandleLogin();

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-white">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Accedi</h1>
      </div>
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4 flex flex-col gap-5"
        >
          <Textbox
            type="email"
            name="email"
            value={formData.email}
            placeholder="Inserisci email"
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

          <Button
            type="submit"
            text="Accedi"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          />
        </form>

        <div className="flex items-center justify-center mt-4 ">
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
