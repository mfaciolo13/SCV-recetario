import { Alert, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';

import { useFeedbackToast } from 'contexts/FeedbackToastContext';

const Toast = () => {
  const { open, variant, message, handleCloseToast } = useFeedbackToast();

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseToast}>
      <Alert onClose={handleCloseToast} severity={variant} className="w-full">
        {message}
      </Alert>
    </Snackbar>
  );
};

Toast.propTypes = {
  open: PropTypes.bool,
  duration: PropTypes.number,
  variant: PropTypes.oneOf(['success', 'error']),
  message: PropTypes.string,
  handleClose: PropTypes.func,
};

Toast.defaultProps = {
  open: false,
  duration: 1500,
  variant: 'success',
  message: '',
  handleClose: () => {},
};

export default Toast;
