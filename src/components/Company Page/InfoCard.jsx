import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import classes from "./Info.module.css"

const InfoCard = ({ info, img }) => {
  const card = (
    <React.Fragment>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              benevlent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography> */}
        {/* <CardMedia component="img" height="50" width="50" image={img} alt="Paella dish" /> */}
        <div className={classes.img}>
          <img src={img} height="50" width="50" alt="sym" />
        </div>

        <Typography variant="body2">
          {info}
          <br />
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={{ maxWidth: 250, margin: 2 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default InfoCard;
