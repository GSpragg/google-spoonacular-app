import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({theme}) => ({
   
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400',
   }))