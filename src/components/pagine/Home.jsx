import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Button Component
export function Button({ type, text, onClick }) {
  return (
    <button
      className="
          bg-green-600
          rounded-lg
          px-5
          py-2.5
          text-white
          text-lg
          hover: border-green-600
          hover: border-2
          cursor-pointer
          hover:bg-white
          hover:text-black
          focus:outline-none
        "
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
};

// Home Component
export function Home() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path */}
              </svg>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <a
                    className="
            font-bold
            px-5
            py-2.5
            text-black
            hover:text-black
          "
                    href="#"
                  >
                    Chi Siamo
                  </a>
                </li>
                <li>
                  <a
                    className="
            font-bold
            px-5
            py-2.5
            text-black
            hover:text-black
          "
                    href="#"
                  >
                    Carriere
                  </a>
                </li>
                <li>
                  <a
                    className="
            font-bold
            px-5
            py-2.5
            text-black
            hover:text-black
          "
                    href="#"
                  >
                    Storia
                  </a>
                </li>
                <li>
                  <a
                    className="
            font-bold
            px-5
            py-2.5
            text-black
            hover:text-black
          "
                    href="#"
                  >
                    Servizi
                  </a>
                </li>
                <li>
                  <a
                    className="
            font-bold
            px-5
            py-2.5
            text-black
            hover:text-black
          "
                    href="#"
                  >
                    Progetti
                  </a>
                </li>
                <li>
                  <a
                    className="
            font-bold
            px-5
            py-2.5
            text-black
            hover:text-black
          "
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link to="/login">
                <Button type="button" text="Login" />
              </Link>

              <div className="hidden sm:flex">
                <Link to="/signup">
                  <Button type="button" text="Registrati" />
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
