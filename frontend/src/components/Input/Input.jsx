import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Input = ({ label, value, onChange }) => (
  <TextField label={label} variant="outlined" value={value} onChange={onChange} />
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  onChange: () => {},
};

export default Input;
