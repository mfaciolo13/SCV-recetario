import PropTypes from 'prop-types';

const TableHeader = ({ label }) => <th className="text-xl w-[8rem]">{label}</th>;

TableHeader.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TableHeader;
