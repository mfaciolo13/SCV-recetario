import PropTypes from 'prop-types';
import { Button as MUIButton } from '@mui/material';

const Button = ({ label, disabled, onClick }) => (
  <MUIButton variant="outlined" disabled={disabled} onClick={onClick}>
    {label}
  </MUIButton>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
