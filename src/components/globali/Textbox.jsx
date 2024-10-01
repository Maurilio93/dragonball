import PropTypes from 'prop-types';

export function Textbox({ type, name, value, placeholder, onChange }) {
  return (
    <input
      className=" w-[300px] rounded-lg border-2 border-black hover:border-2 text-black px-5 py-2.5 text-lg cursor-pointer focus:outline-none"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

Textbox.propTypes = {
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
