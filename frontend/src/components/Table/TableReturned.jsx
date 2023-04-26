import { AppBar, Box, CssBaseline, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";

import React ,{useState ,useEffect} from "react";
import axios from "axios";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '6px',
  },
}));


const GreenTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: '#000033',
}));

export default function TableReturned () {
    
    const[historytable, setHistoryTable] = useState([]);
    useEffect(() =>{
        function getHistoryTable(){
            axios.get("http://localhost:5000/api/returneddatas").then((res)=>{
              setHistoryTable(res.data);
            }).catch((err)=> {
                alert(err.message);
            })
        }
        getHistoryTable();
    },[])

 

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    
        </AppBar>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#000066",height: '100%'}}>
          <Typography variant="h4" color="#FFFFFF"  sx={{ textAlign:'center'}} gutterBottom >Returned Keys</Typography>
            <Toolbar />
            <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', overflow: 'auto', bgcolor: 'background.paper' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table"  sx={{ minWidth:600 }}>
        <TableHead>
          <TableRow>
            <GreenTableCell >Key Id</GreenTableCell>
            <GreenTableCell>User Id</GreenTableCell>
            <GreenTableCell>First Name</GreenTableCell>
            <GreenTableCell>Last Name</GreenTableCell>
            <GreenTableCell>Place</GreenTableCell>
            <GreenTableCell>Date</GreenTableCell>
            <GreenTableCell>Time</GreenTableCell>
          </TableRow>
        </TableHead>
          <TableBody>
          {historytable.map(item => (

            
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 10 }}>
           <StyledTableCell size='small' >{item.key_id}</StyledTableCell>
            <StyledTableCell size='small' >{item.user_id}</StyledTableCell>
            <StyledTableCell size='small' >{item.fname}</StyledTableCell>
            <StyledTableCell size='small' >{item.lname}</StyledTableCell>
            <StyledTableCell size='small'>{item.place}</StyledTableCell>
            <StyledTableCell size='small'>{new Date(item.date).toLocaleDateString()}</StyledTableCell>
            <StyledTableCell size='small'>{new Date(item.date).toLocaleTimeString()}</StyledTableCell>
    
            


          </TableRow>
            
          ))}

          
          </TableBody>
         
        </Table>
      </TableContainer>
      
    </Paper>
            
           
          </Box>
        </Box>
        </Box>
      </Box>
    );
  }