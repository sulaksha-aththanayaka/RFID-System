import React, { useState } from 'react';
import axios from 'axios';
import './Card.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';
// import Chart from 'react-apexcharts';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
// import { TableCell } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '16px',
    padding: '6px',
    overflowY: 'hidden',
  },
}));

//The Transistion is happend with this.
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  //   const [allUsers, setAllUsers] = useState([]);
  //   const [allKeys, setAllKeys] = useState([]);
  //   const [allCombined, setAllCombined] = useState([]);

  //   axios.get('http://localhost:5000/cards').then(resp => {

  //   setAllUsers(resp.data);
  // });

  //   axios.get('http://localhost:5000/keys').then(resp => {

  //   setAllKeys(resp.data);
  // });

  // axios.get('http://localhost:5000/combineddatas').then(resp => {

  // setAllCombined(resp.data);
  // });

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        ((<CompactCard param={props} setExpanded={() => setExpanded(true)} />),
        (
          <CompactCardUsual
            param={props}
            setExpanded={() => setExpanded(true)}
          />
        ))
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card for 'To be Handover'
function CompactCard({ param, setExpanded }) {
  // const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      {/* <div className="radialBar"> */}
      {/* <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        /> */}
      {/* <span>{param.title}</span> */}
      {/* </div> */}
      {/* <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div> */}
    </motion.div>
  );
}

//Compact cars for other two
function CompactCardUsual({ param, setExpanded }) {
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <span>{param.title}</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span style={{ marginBottom: '15px' }}>{param.title}</span>

      {/* <div>{param.value}</div> */}
      <div className="chartContainer">
        {param.id === 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Paper
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                bgcolor: 'background.paper',
              }}
            >
              <TableContainer sx={{ maxHeight: 440, overflowY: 'auto' }}>
                <Table sx={{ minWidth: 800 }}>
                  <TableHead>
                    <TableRow>
                      <th
                        style={{
                          backgroundColor: '#444',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                        }}
                      >
                        User Id
                      </th>
                      <th
                        style={{
                          backgroundColor: '#444',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                        }}
                      >
                        First Name
                      </th>
                      <th
                        style={{
                          backgroundColor: '#444',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                        }}
                      >
                        Last Name
                      </th>
                      <th
                        style={{
                          backgroundColor: '#444',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                        }}
                      >
                        Gender
                      </th>
                      {/* <th>Designation</th> */}
                      <th
                        style={{
                          backgroundColor: '#444',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                        }}
                      >
                        Phone Number
                      </th>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {param.users.map((data) => (
                      <TableRow
                      // sx={{
                      //   '&:last-child td, &:last-child th': { border: 0 },
                      //   height: 10,
                      //   paddingRight: '10px',
                      // }}
                      >
                        <StyledTableCell size="small" width="20%">
                          {data.user_id}
                        </StyledTableCell>
                        <StyledTableCell size="small" width="20%">
                          {data.fname}
                        </StyledTableCell>
                        <StyledTableCell size="small" width="20%">
                          {data.lname}
                        </StyledTableCell>
                        <StyledTableCell size="small" width="20%">
                          {data.gender}
                        </StyledTableCell>
                        {/* <StyledTableCell size="small" width="20%">
                          {data.designature}
                        </StyledTableCell> */}
                        <StyledTableCell size="small" width="20%">
                          {data.phn}
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        )}

        {param.id === 1 && (
          <div className="chartContainer">
            {/* render data from "keys" collection */}
            {/* Example: */}

            <Paper
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                overflow: 'auto',
                bgcolor: 'background.paper',
              }}
            >
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ minWidth: 500 }}
                >
                  <TableHead>
                    <TableRow>
                      <th style={{ color: '#fff' }}>Key ID</th>
                      <th style={{ color: '#fff' }}>Place</th>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {param.keys.map((data) => (
                      <TableRow
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          height: 10,
                        }}
                      >
                        <StyledTableCell size="small" width="50%">
                          {data.key_id}
                        </StyledTableCell>
                        <StyledTableCell size="small" width="50%">
                          {data.place}
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        )}

        {param.id === 2 && (
          <div className="chartContainer">
            {/* render data from "keys" collection */}
            {/* Example: */}

            <Paper
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                overflow: 'auto',
                bgcolor: 'background.paper',
              }}
            >
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ minWidth: 600 }}
                >
                  <TableHead>
                    <TableRow>
                      <th
                        style={{
                          backgroundColor: '#38AfCD',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                        }}
                      >
                        First Name
                      </th>
                      <th
                        style={{
                          backgroundColor: '#38AfCD',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                        }}
                      >
                        Last Name
                      </th>
                      <th
                        style={{
                          backgroundColor: '#38AfCD',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                        }}
                      >
                        Place
                      </th>
                      <th
                        style={{
                          backgroundColor: '#38AfCD',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                        }}
                      >
                        Date
                      </th>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {param.combined.map((data) => (
                      <TableRow
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          height: 10,
                        }}
                      >
                        <StyledTableCell size="small" width="25%">
                          {data.fname}
                        </StyledTableCell>
                        <StyledTableCell size="small" width="25%">
                          {data.lname}
                        </StyledTableCell>
                        <StyledTableCell size="small" width="25%">
                          {data.place}
                        </StyledTableCell>
                        <StyledTableCell size="small" width="25%">
                          {data.date}
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
