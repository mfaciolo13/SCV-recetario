import PropTypes from 'prop-types';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

const BasicTable = ({ rows }) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Recetas</TableCell>
          <TableCell>Puntaje</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              <Link to={`detail/${row.id}`}>{row.title}</Link>
            </TableCell>
            <TableCell>{row.averageRating ?? '-'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

BasicTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      averageRating: PropTypes.string.isRequired,
    })
  ).isRequired,
};

BasicTable.defaultProps = {
  rows: [],
};

export default BasicTable;
