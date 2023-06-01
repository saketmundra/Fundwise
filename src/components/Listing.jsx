import React from "react";
import BoxContainer from "./BoxContainer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import classes from "./Listing.module.css";

const Listing = () => {
  return (
    // <Container fixed>
    <div className={classes.companies}>
      <Box
        sx={{
          width: 900,
          height: 450,
          borderRadius: 2,
          backgroundColor: "#cfe8dd",
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          //},
        }}
      >
        <div styles={{padding:"5%"}}>
          <h2 className={classes.compName}>
            Live Campaigns</h2>
        </div>
        <div className={classes.companiesContainer}>
          <BoxContainer />
          <BoxContainer />
          <BoxContainer />
        </div>
      </Box>
    </div>
  );
};

export default Listing;
