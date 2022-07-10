import PropTypes from 'prop-types';
import { Button as MUIButton } from '@mui/material';

const Button = ({ label, onChange }) => (
  <MUIButton variant="outlined" onChange={onChange}>
    {label}
  </MUIButton>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Button.defaultProps = {
  onChange: () => {},
};

export default Button;
