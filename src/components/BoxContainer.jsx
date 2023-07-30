import React from "react";
import Box from "@mui/material/Box";
import classes from "./Listing.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider, useThemeProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BoxContainer = (props) => {

  let navigate = useNavigate(); 
    const handleClick = () =>{ 
    let path = `/companies/${props.id}`; 
    navigate(path);
  }

  return (
    <Box onClick={handleClick}
      sx={{
        width: 270,
        height: 250,
        borderRadius: 2,
        padding: 4,
        backgroundColor: "#FFFFFF",
        margin:"0 2%"
      }}
    >
      <div className={classes.header}>
        <img
          className={classes.logo}
          src="https://tyke-startup-bucket.s3.ap-south-1.amazonaws.com/Accelerate%20Productx%20Ventures%20Pvt%20Ltd/1618042284835.jpeg"
          alt="logo"
        />
        <h4 className={classes.title}>{props.name}</h4>
      </div>
      <List
          sx={{ width: "100%", maxWidth: 200,maxHeight: 15, bgcolor: "background.paper"}}
        >
          <ListItem>
            <ListItemText secondary="Raised" primary={props.target} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary="Closes on" primary={props.targetDate} />
          </ListItem>
        </List>
    </Box>
  );
};

export default BoxContainer;
