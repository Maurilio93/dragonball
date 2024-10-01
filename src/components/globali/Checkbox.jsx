import PropTypes from 'prop-types';

export function Checkbox({checked,onChange}) {

  return (
    <input
      className="flex flex-col"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      aria-label="controlled"
    />
  );
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };
