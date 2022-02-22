import React, { useState } from 'react';
import './App.css';

import * as Mui from "@mui/material";
import { makeStyles } from "@mui/styles";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';


const useStyles = makeStyles({
  copy_button: {
    color: 'white',
    "&.active": {
      background:'black',
    },
  },
});

const App = () => {
  const [hexColor, setHexColor] = useState("#3CB371");

  const classes = useStyles();
  
  function handleNewColor() {
    let HEX = Math.floor(Math.random() * (16 ** 6)).toString(16);
    HEX = "#" + HEX.toUpperCase();
    console.log(`${HEX}`);
    setHexColor(HEX);
  }

  function copyMessage() {
    console.log(`Copied: ${hexColor}`);
    navigator.clipboard.writeText(hexColor);
    return;
  }
  
  return (
    <>
      <Mui.Stack spacing={2}>
        <h1 className="colored-header">Random Color Generator</h1>
        <p id="credits">Made by <a href="https://github.com/KennyOliver">Kenneth Oliver</a></p>
        <div className="flex-container">
          <div>
            <Mui.Box
              sx={{
                backgroundColor: hexColor,
                borderRadius: 2,
                boxShadow: "0 0 .4em black",
                maxWidth: 1/1,
                p: 10,
                textAlign: "center",
              }}
            >
              <Mui.Button
                onClick={copyMessage}
                variant="contained"
                color="secondary"
                endIcon={<FormatPaintIcon />}
                sx={{
                  backgroundColor: "rgba(0, 0, 0, .4)",
                }}
                className={classes.copy_button}
              >
                Copy!
              </Mui.Button>
            </Mui.Box>
          </div>
          <div>
            <Mui.Button
              onClick={handleNewColor}
              variant="contained"
              color="primary"
              endIcon={<AutoFixHighIcon />}
              sx={{
                backgroundColor: "primary.dark",
                boxShadow: "0 0 .4em black",
                maxWidth: 1/1,
              }}
            >Generate!</Mui.Button>
          </div>
        </div>
      </Mui.Stack>
    </>
  );
}

export default App;