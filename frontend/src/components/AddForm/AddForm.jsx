import { AppBar, Box, Button, CardContent, Chip, CssBaseline, Grid, Stack, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

function AddForm() {

    const [key_id ,setKeyId] = useState('');
    const [place ,setPlace] = useState('');
    

    function sendData(e) {
        e.preventDefault();
        const newItem = {
          key_id,
          place
        }
        axios.post("http://localhost:5000/addcardkey", newItem).then(()=> {
            alert("New Key is added")
            
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
          <Typography variant="h4" color="#FFFFFF"  sx={{ textAlign:'center'}} gutterBottom >Add Key</Typography>
            <Toolbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#FFFFFF",height: '100%'}}>
           
            <Grid item xs={8} md={9}>
              <Box p={2}>
                <CardContent>
                    <Toolbar/>
                
                    <Stack direction="row" spacing={4}>
                <Chip label="Key Id" sx={{ fontSize: "1.0rem", width: "25%" }} color="primary" />
                <TextField label="" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }} onChange={(e)=> {setKeyId(e.target.value);}}/>
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>

                <Stack direction="row" spacing={4}>
                <Chip label="Place" sx={{ fontSize: "1.0rem", width: "25%" }} color="primary" />
                <TextField label="" id="standard-size-small"  size="small" sx={{ fontSize: "1.0rem", width: "50%" }} onChange={(e)=> {setPlace(e.target.value);}} />
                </Stack>
                <Stack direction = {'row'} flexGrow = {1}sx={{ height:10}}></Stack>


                

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

export default AddForm;