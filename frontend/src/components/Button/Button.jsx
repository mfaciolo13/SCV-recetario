import PropTypes from 'prop-types';
import { Button as MUIButton } from '@mui/material';

const Button = ({ label, onClick }) => (
  <MUIButton variant="outlined" onClick={onClick}>
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
