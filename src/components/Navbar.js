import React from 'react'
import { Link } from 'react-router-dom';
import CookieTwoToneIcon from '@mui/icons-material/CookieTwoTone';
import { AppBar, Toolbar,  Typography, Box } from '@mui/material'

import { Profile } from './Profile';



export function NavBar() {


 
   
   
    

  return (
    <>
   
   
      <AppBar position='fixed' color='inherit' >
        <Toolbar >
          <Typography variant='h5' color="inherit"
            to="/home" as={Link} label="home">
            Recipes App
            <CookieTwoToneIcon/>
          </Typography>
          <Box sx={{ flexGrow: 1 }}/>  
           <Profile/>
        </Toolbar>
      </AppBar>         
    </>

   
  )
}

