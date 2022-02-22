import React from 'react';
import './App.css';

import * as Mui from "@mui/material";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';

const App = () => {
  return (
    <>
      <Mui.Stack spacing={2}>
        <h1 className="colored-header">Random Color Generator</h1>
        <p id="credits">Made by <a href="https://github.com/KennyOliver">Kenneth Oliver</a></p>
        <div className="flex-container">
          <div>
            <Mui.Box
              sx={{
                backgroundColor: "primary.main",
                borderRadius: 2,
                maxWidth: 1/1,
                p: 10,
                textAlign: "center",
              }}
            >
              <Mui.Grid container justifyContent="center">
                <Mui.Button
                  variant="contained"
                  color="primary"
                  endIcon={<FormatPaintIcon />}
                  sx={{backgroundColor: "primary.dark"}}
                >
                  Copy!
                </Mui.Button>
              </Mui.Grid>
            </Mui.Box>
          </div>
          <div>
            <Mui.Button
              variant="contained"
              color="primary"
              endIcon={<AutoFixHighIcon />}
              sx={{
                backgroundColor: "primary.dark",
                maxWidth: 1/1,
              }}
            >Generate!</Mui.Button>
          </div>
        </div>
      </Mui.Stack>
    </>
  );
}

function Generator() {
  // pass
}

export default App;