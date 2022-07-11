import PropTypes from 'prop-types';

import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';

const Table = ({ columns, rows }) => (
  <table className="divide-y divide-gray-100">
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column) => (
          <TableHeader key={column.id} label={column.label} />
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <TableCell key={row.id} columns={columns} row={row} />
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Table.defaultProps = {
  columns: [],
  rows: [],
};

export default Table;
