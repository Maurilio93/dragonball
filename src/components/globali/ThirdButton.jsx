import PropTypes from 'prop-types';

export function ThirdButton({ type, text, onClick }) {
  return (
    <button
      className="
          w-16
          h-12
          bg-green-600
          rounded-lg
          px-1.5
          py-2.5
          text-white
          text-lg
          hover: border-x-green-400
          hover: border-3
          cursor-pointer
          hover:bg-green-400
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

ThirdButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
};
