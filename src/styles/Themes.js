import { createTheme } from "@mui/material"

export const theme = createTheme ({
  palette: {
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: 'rgba(224,224,224,0.03)',
      paper: 'rgba(66,66,66,0.48)',
    },
    text: {
      primary: '#ffebee',
      secondary: 'rgba(255,235,238,0.44)',
    },
  },

  contrastThreshold: 3,
  tonalOffset: 0.2,
});
    