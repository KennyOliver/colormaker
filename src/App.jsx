import React, { useState } from 'react';
import './App.css';

import * as Mui from "@mui/material";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import PaletteIcon from '@mui/icons-material/Palette';


const App = () => {
  const [hexColor, setHexColor] = useState("#3CB371");
  const [snackOpen, setSnackOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(3);
  
  function handleNewColor() {
    let HEX = Math.floor(Math.random() * (16 ** 6)).toString(16);
    HEX = "#" + HEX.toUpperCase();
    console.log(`${HEX}`);
    setHexColor(HEX);
  }
  function copyMessage() {
    console.log(`Copied: ${hexColor}`);
    navigator.clipboard.writeText(hexColor);
    setSnackOpen(true);
  }
  function handleSnackClose(event, reason) {
    // if (reason !== "clickaway") return;
    console.log(false);
    setSnackOpen(false);
  }
  
  return (
    <>
      <Mui.Stack spacing={2}>
        <div>
          <h1 className="colored-header">&lt;ColorMaker /&gt;</h1>
          <p id="subtitle">a random color generator</p>
          <p id="credits">Made by <a href="https://github.com/KennyOliver">Kenneth Oliver</a></p>
        </div>
        <div className="flex-container">
          <ColorBox />
          <Mui.FormControl>
            <Mui.FormLabel id="radios-label">Color Space</Mui.FormLabel>
            <Mui.RadioGroup
              id="radio-group"
              row
              defaultValue="HEX"
              name="radio-buttons-group"
            >
              <Mui.FormControlLabel value="HEX" control={<Mui.Radio />} label="HEX" />
              <Mui.FormControlLabel value="RGB" control={<Mui.Radio />} label="RGB" />
              <Mui.FormControlLabel value="HSL" control={<Mui.Radio />} label="HSL" />
              <Mui.FormControlLabel value="CMYK" control={<Mui.Radio />} label="CMYK" />
            </Mui.RadioGroup>
          </Mui.FormControl>
          <GeneratorButton />
        </div>
      </Mui.Stack>
      <CopySnackBar />
    </>
  );
  
  function ColorBox() {
    return (
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
          >
            Copy!
          </Mui.Button>
        </Mui.Box>
      </div>
    )
  }
  function GeneratorButton() {
    return(
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
    )
  }
  function CopySnackBar() {
    return (
      <Mui.Snackbar 
        open={snackOpen}
        message={"Copied!"}
        autoHideDuration={1500}
        onClose={handleSnackClose}
      >
        <Mui.Alert icon={<PaletteIcon sx={{color: hexColor}} />} severity="success" sx={{background: "#363636", color: "white"}}>
          <Mui.AlertTitle>Success!</Mui.AlertTitle>
          I've copied <span style={{color: hexColor}}>{hexColor}</span> for you!
        </Mui.Alert>
      </Mui.Snackbar>
    )
  }
}


export default App;