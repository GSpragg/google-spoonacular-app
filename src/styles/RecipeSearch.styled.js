import { Box, Paper, styled, TextField } from '@mui/material';


  
  export const SearchIconWrapper = styled(Box)(({ theme }) => ({
    
    height: '100%',
    position: 'absolute', 
    display: 'flex-grid',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  export const StyledTextField = styled(TextField)(({ theme }) => ({
    color: 'inherit',
    marginLeft: '8px',
    marginRight: '8px',
    '& .MuiInputBase-input': {
      // vertical padding + font size from searchIcon 
      Maxwidth: '100%',
      },  
  }));

  export const StyledPaper = styled(Paper)`
    color: 'black';
    border-radius: '25em';
    display: 'flex';
    align-items: 'flex-end';
  `