import { Card, styled, TextField, Typography } from "@mui/material"


export const StyledCard = styled(Card)`
cursor: pointer;
background: linear-gradient(180deg, #0e0f0f, #414141 );
max-height: "500px";
max-width: "400px";
min-height: "300px";
border-radius: "8%";

`
export const StyledTypography = styled(Typography)`
color: white;
`

export const StyledTextField = styled(TextField)(({ theme }) => ({
    display: '{display}',
    color: 'inherit',
    marginLeft: '8px',
    marginRight: '8px',
    '& .MuiInputBase-input': {
        color: 'white',
        Maxwidth: '100%',
    }
}));