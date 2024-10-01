import PropTypes from 'prop-types';

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
