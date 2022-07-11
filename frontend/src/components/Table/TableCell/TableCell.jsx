import get from 'lodash/get';

const TableCell = ({ columns, row }) => (
  <tr>
    {columns.map((column) => {
      const value = get(row, column.key);

      return (
        <td className="text-center" key={column.id}>
          {value}
        </td>
      );
    })}
  </tr>
);

export default TableCell;
