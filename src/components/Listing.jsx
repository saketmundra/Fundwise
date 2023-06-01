import React from "react";
import BoxContainer from "./BoxContainer";
import Box from "@mui/material/Box";

import classes from "./Listing.module.css";

const Listing = () => {
  return (
    <div className={classes.companies}>
      <Box
        sx={{
          width: 900,
          height: 450,
          borderRadius: 2,
          backgroundColor: "#cfe8dd",
          
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
