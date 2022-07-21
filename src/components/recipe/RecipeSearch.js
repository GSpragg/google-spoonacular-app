
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {  Grid, IconButton, InputAdornment  } from '@mui/material';
import { StyledPaper, StyledTextField } from '../../styles/RecipeSearch.styled';




export function RecipeSearch() {
  
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/' + search )
   
  }


  return (
    
<>
  <Grid container justifyContent={'center'} >
    <Grid item>
      <StyledPaper component="form" 
      onSubmit = { submitHandler }>
        <StyledTextField        
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton aria-label="search"
                onClick={ submitHandler }>
                  <SearchIcon/>
                </IconButton>
              </InputAdornment>
              ),
            }}
        size="small"
        variant='standard'
        type="search"
        placeholder="Search…"
        aria-label='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      </StyledPaper>
    </Grid>
  </Grid>
</>
  )}