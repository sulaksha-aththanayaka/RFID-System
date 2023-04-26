import { AppBar, Box, Button, CardContent, Chip, CssBaseline, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

function AddKeyForm() {

    const [user_id ,setUserId] = useState('');
    const [fname ,setFName] = useState('');
    const [lname ,setLName] = useState('');
    const [gender,setGender] = useState('');
    const [designation ,setDesignature] = useState('');
    const [phn ,setContact] = useState('');

    function sendData(e) {
        e.preventDefault();
        const newItem = {
          user_id,
          fname ,
          lname,
          gender,
          designation,
          phn
        }
        axios.post("http://localhost:5000/addcarduser", newItem).then(()=> {
            alert("New Item is added")
            
        }).catch((err)=>{
            alert(err)
        })
    
    }    


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
          <Typography variant="h4" color="#FFFFFF"  sx={{ textAlign:'center'}} gutterBottom >Add User</Typography>
            <Toolbar />
            
            <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#FFFFFF",height: '100%'}}>
           
           <Grid item xs={8} md={9}>
             <Box p={2}>
               <CardContent>
                   <Toolbar/>
               
                   <Stack direction="row" spacing={4}>
               <Chip label="User Id" sx={{ fontSize: "1.0rem", width: "25%" }} color="primary" />
               <TextField label="" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }} onChange={(e)=> {setUserId(e.target.value);}}/>
               </Stack>
               <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>

               <Stack direction="row" spacing={4}>
               <Chip label=" First Name" sx={{ fontSize: "1.0rem", width: "25%" }} color="primary" />
               <TextField label="" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }} onChange={(e)=> {setFName(e.target.value);}} />
               </Stack>
               <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


               <Stack direction="row" spacing={4}>
               <Chip label="Last Name" sx={{ fontSize: "1.0rem", width: "25%" }} color="primary"/>
               <TextField label="" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }} onChange={(e)=> {setLName(e.target.value);}} />
               </Stack>
               <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


               <Stack direction="row" spacing={4}>
               <Chip label="Gender" sx={{ fontSize: "1.0rem", width: "25%" }} color="primary" />
               <RadioGroup
                       row
                       aria-labelledby="demo-row-radio-buttons-group-label"
                       name="row-radio-buttons-group"
                       onChange={(e)=> {setGender(e.target.value);}}
                   >
                     <FormControlLabel value="Male" control={<Radio/>} label="Male" />
                     <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    
                   </RadioGroup>
               </Stack>
               <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


               <Stack direction="row" spacing={4}>
               <Chip  color="primary" label="Designature" sx={{ fontSize: "1.0rem", width: "25%" }} />
               <FormControl sx={{ width: "50%" }}>
               <InputLabel id="demo-simple-select-label" size="small" sx={{ fontSize: "1.0rem"}}>Select</InputLabel>
               <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={designation}
                 label="Age"
                 onChange={(e)=> {setDesignature(e.target.value);}}
               >
                 <MenuItem value={"Senior Lecturer"}>Senior Lecturer</MenuItem>
                 <MenuItem value={"Lecturer"}>Lecturer</MenuItem>
                 <MenuItem value={"Instructor"}>Instructor</MenuItem>
                 <MenuItem value={"Student"}>Student</MenuItem>
                 <MenuItem value={"Librarian"}>Librarian</MenuItem>
               </Select>
             </FormControl>
               </Stack>
               <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


               <Stack direction="row" spacing={4}>
               <Chip label="Contact Number" sx={{ fontSize: "1.0rem", width: "25%" }} color="primary"/>
               <TextField label="" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }} onChange={(e)=> {setContact(e.target.value);}} />
               </Stack>
               <Stack direction = {'row'} flexGrow = {1}sx={{ height:30}}></Stack>

               <Stack direction='row'  justifyContent='flex-end'  flexGrow={1} sx={{ height: 30 , width: "77%"}}>
               <Button variant='contained' sx={{ width: '20%' }} onClick={sendData} >Submit</Button> 
               </Stack>

               </CardContent>
             </Box>
           </Grid>
         </Box>
          </Box>
        </Box>
        </Box>
      </Box>

    
    
  );
}

export default AddKeyForm;