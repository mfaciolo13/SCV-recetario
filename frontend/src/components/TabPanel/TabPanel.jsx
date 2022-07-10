import PropTypes from 'prop-types';

const TabPanel = ({ value, index, children }) => (
  <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
    {value === index && <div>{children}</div>}
  </div>
);

TabPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default TabPanel;
