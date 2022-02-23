import React, { useState } from 'react';
import './App.css';

import * as CLR_CVRT from "color-convert";

import * as Mui from "@mui/material";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import PaletteIcon from '@mui/icons-material/Palette';


const App = () => {
  const [hexColor, setHexColor]           = useState("#FDE442");
  const [snackOpen, setSnackOpen]         = useState(false);
  const [snackColorMsg, setSnackColorMsg] = useState(hexColor);
  const [selectedRadio, setSelectedRadio] = useState("HEX");
  
  function handleNewColor() {
    let HEX = Math.floor(Math.random() * (16 ** 6)).toString(16);
    HEX = "#" + HEX.toUpperCase();
    console.log(`${HEX}`);
    setHexColor(HEX);
  }
  function handleCopy() {
    let result;
    switch (selectedRadio) {
      case "HEX":  result = hexColor; break;
      case "RGB":
        let asRGB = CLR_CVRT.hex.rgb(hexColor);
        result = `${asRGB[0]}, ${asRGB[1]}, ${asRGB[2]}`;
        break;
      case "HSL":
        let asHSL = CLR_CVRT.hex.hsl(hexColor);
        result = `${asHSL[0]}\u00B0, ${asHSL[1]}%, ${asHSL[2]}%`;
        break;
      case "CMYK":
        let asCMYK = CLR_CVRT.hex.cmyk(hexColor);
        result = `${asCMYK[0]}%, ${asCMYK[1]}%, ${asCMYK[2]}, ${asCMYK[3]}%`;
        break;
      default:      result = hexColor;
    }
    setSnackColorMsg(result);
    
    console.log(
      `Copied: ${hexColor}\t\tColor Space: ${selectedRadio}\t\tResult: ${result}`
    );
    navigator.clipboard.writeText(result);
    setSnackOpen(true);
  }
  function handleRadioChange({ target }) {
    console.log(`Color Space: ${target.value}`);
    setSelectedRadio(target.value);
  }
  function handleSnackClose(event, reason) {
    // if (reason !== "clickaway") return;
    setSnackOpen(false);
  }
  
  return (
    <>
      <Mui.Stack spacing={2}>
        <div id="title-and-subtitle-container">
          <h1 className="colored-header">&lt;ColorMaker /&gt;</h1>
          <p id="subtitle">random color generator</p>
          <p id="credits">Made by <a href="https://github.com/KennyOliver">Kenneth Oliver</a></p>
        </div>
        <div className="flex-container">
          <ColorBox />
          <ColorSpaceRadios />
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
            onClick={handleCopy}
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
  function ColorSpaceRadios() {
    return (
      <Mui.FormControl>
        <Mui.FormLabel id="radios-label">Color Space</Mui.FormLabel>
        <Mui.RadioGroup
          id="radio-group"
          onChange={handleRadioChange}
          name="radio-buttons-group"
          defaultValue={selectedRadio}
          row
        >
          <Mui.FormControlLabel value="HEX" labelPlacement="bottom" control={<Mui.Radio />} label="HEX" />
          <Mui.FormControlLabel value="RGB" labelPlacement="bottom" control={<Mui.Radio />} label="RGB" />
          <Mui.FormControlLabel value="HSL" labelPlacement="bottom" control={<Mui.Radio />} label="HSL" />
          <Mui.FormControlLabel value="CMYK" labelPlacement="bottom" control={<Mui.Radio />} label="CMYK" />
        </Mui.RadioGroup>
      </Mui.FormControl>
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
          I've copied <span style={{color: hexColor}}>{snackColorMsg}</span> for you!
        </Mui.Alert>
      </Mui.Snackbar>
    )
  }
}


export default App;