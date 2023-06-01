import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import classes from "./Info.module.css";

const Docs = () => {
  return (
    <div className={classes.deal}>
    <h2 className={classes.heading}>Documents</h2>
    <Stack spacing={8} direction="row" sx={{marginTop:"2%"}}>
      <Button variant="outlined">Download ↓</Button>
      <Button variant="outlined">Download ↓</Button>
      <Button variant="outlined">Download ↓</Button>
    </Stack>
    </div>
  )
}

export default Docs