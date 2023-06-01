import React, { useEffect, useState } from "react";
import BoxContainer from "./BoxContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";

import classes from "./Listing.module.css";

const Listing = (props) => {

  const [companies,setCompanies] = useState([])
  useEffect(()=> {
    axios.get("http://localhost:5000/api/company/getall")
    .then(function(response) {
      console.log(response.data)
      setCompanies(response.data)
    })
  },[])

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
        <div styles={{ padding: "5%" }}>
          <h2 className={classes.compName}>Live Campaigns</h2>
        </div>
        <div className={classes.companiesContainer}>
          <ul className={classes.list}>
            {companies.map((company) => (
              <BoxContainer key={company.id} id={company.id} target={company.target} targetDate={company.targetDate} name={company.legalName} />
            ))}
          </ul>
        </div>
      </Box>
    </div>
  );
};

export default Listing;
