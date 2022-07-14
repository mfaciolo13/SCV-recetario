import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select as MUISelect } from '@mui/material';

const Select = ({ label, options, selected, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <MUISelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        size="small"
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  label: '',
  options: [],
  selected: '',
  onChange: () => {},
};

export default Select;
