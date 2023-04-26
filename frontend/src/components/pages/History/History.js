import React from 'react';
import './History.css';
import Slidebar from '../../Slidebar/Sidebar';
import TableReturned from '../../Table/TableReturned';

function History() {
  return (
    <div className="History">
      <div className="HistoryGlass">
        <Slidebar />

        <TableReturned />
      </div>
    </div>
  );
}

export default History;
