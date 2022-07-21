import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

export function Profile() {
    
    const { setUser } = useContext(UserContext)
    const { user } = useContext(UserContext)

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false
        document.getElementById("signOutButton").hidden = true
    } 

  return (
    <>
       
  {Object.keys(user).length !== 0 &&
    <Typography>
      Welcome {user.name}!
    </Typography>
  } 
    <Box>
    <Tooltip title = "sign out?" arrow>
    <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => handleSignOut(e)}
    >
      <Avatar 
       src={user.picture}/>
    </IconButton>
    </Tooltip>
  </Box>
  </>
  )}

