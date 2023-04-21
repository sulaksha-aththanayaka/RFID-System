import React from 'react';
import './History.css';
import Slidebar from '../../Slidebar/Sidebar';
import Table from '../../Table/Table';

function History() {
  return (
    <div className="History">
      <div className="HistoryGlass">
        <Slidebar />

        <Table />
      </div>
    </div>
  );
}

export default History;
