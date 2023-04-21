import React from 'react';
import fakeData from '../../MOCK_DATA.json';
import './Table.css';
import { useTable } from 'react-table';

function Table() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Key_ID',
        accessor: 'key_id',
      },
      {
        Header: 'Taken_User_ID',
        accessor: 'taken_user_id',
      },
      {
        Header: 'Taken_By_First_Name',
        accessor: 'taken_by_first_name',
      },
      {
        Header: 'Taken_By_Last_Name',
        accessor: 'taken_by_last_name',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Phone_Number',
        accessor: 'phone_number',
      },
      {
        Header: 'Designation',
        accessor: 'designation',
      },
      {
        Header: 'At_Time',
        accessor: 'at_time',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <div className='container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
