import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import profile from "../../assets/profile.png";
import linkedin from "../../assets/linkedin.png"
import classes from "./Info.module.css";

const MeetTeam = () => {
  const info = "Name";
  return (
    <div className={classes.highlight}>
      <h2 className={classes.heading}>About the Founder</h2>
      <Card sx={{ maxWidth: 400, marginTop:7}}>
        <CardContent sx={{alignItems:"center"}}>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <CardMedia
        component="img"
        image={profile}
        alt="Paella dish"
        sx={{width:"150px",height:'150px'}} 
      />
          <Typography variant="h5" component="div">
            Sahil Srivastava
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Founder
          </Typography>
          <Typography variant="body2">
          eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru
            <br />

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://www.linkedin.com/feed/">
            <img src={linkedin} alt="contact" width="25px" height="25px" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MeetTeam;
