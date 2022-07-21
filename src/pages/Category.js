import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Tab, Tabs, Tooltip } from '@mui/material'

import RamenDining from '@mui/icons-material/RamenDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import OutdoorGrill from '@mui/icons-material/OutdoorGrill';
import TableBarRounded from '@mui/icons-material/TableBarRounded';




export function Category() {

  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // in consideration of header
    <Container sx={{ py:"19px", mt:"63px", width: "100%", px: '25px'}}> 
    
        <Tabs value={value} onChange={handleChange} centered>
          <Tooltip title={'Thai' } arrow>
            <Tab 
              as={NavLink} to={"/Cuisine/Thai"}
              icon={<RamenDining />} aria-label ="Thai"/>
          </Tooltip>
          <Tooltip title={ 'Cajun' } arrow>
            <Tab 
               as={NavLink} to={"/Cuisine/Cajun"} 
               icon={<OutdoorGrill />} aria-label ="Cajun"/>
          </Tooltip>
          <Tooltip title={ 'Irish' } arrow>
            <Tab 
              as={NavLink} to={"/Cuisine/Irish"}
              icon={<TableBarRounded />} aria-label ="Irish"/>
          </Tooltip>
          <Tooltip title={ 'American' } arrow>
            <Tab 
              as={NavLink} to={"/Cuisine/American"}
              icon={<FastfoodIcon />} aria-label ="American"/>
          </Tooltip>
        </Tabs>   
 </Container>
  )
}

