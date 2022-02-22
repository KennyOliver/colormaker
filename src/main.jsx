import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

const customTheme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      contrast: "#000000",
    },
    secondary: {
      main: teal[500],
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
